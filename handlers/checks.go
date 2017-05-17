package handlers

import (
	"encoding/json"
	"errors"
	"fmt"
	"os/exec"
	"path/filepath"
	"strings"
	"time"

	"github.com/boltdb/bolt"
	humanize "github.com/dustin/go-humanize"
	"github.com/golang/glog"
	"github.com/goreporter/goreporterweb/check"
	"github.com/goreporter/goreporterweb/download"
	"github.com/wgliang/goreporter/engine"
	"github.com/wgliang/goreporter/tools"
)

func dirName(repo string) string {
	return fmt.Sprintf("repos/src/%s", repo)
}

func getFromCache(repo string) (tools.HtmlData, error) {
	// try and fetch from boltdb
	db, err := bolt.Open(DBPath, 0600, &bolt.Options{Timeout: 1 * time.Second})
	if err != nil {
		return tools.HtmlData{}, fmt.Errorf("failed to open bolt database during GET: %v", err)
	}
	defer db.Close()

	resp := tools.HtmlData{}
	err = db.View(func(tx *bolt.Tx) error {
		b := tx.Bucket([]byte(RepoBucket))
		if b == nil {
			return errors.New("No repo bucket")
		}
		cached := b.Get([]byte(repo))
		if cached == nil {
			return fmt.Errorf("%q not found in cache", repo)
		}

		err = json.Unmarshal(cached, &resp)
		if err != nil {
			return fmt.Errorf("failed to parse JSON for %q in cache", repo)
		}
		return nil
	})

	if err != nil {
		return resp, err
	}

	resp.LastRefresh = resp.LastRefresh.UTC()
	resp.HumanizedLastRefresh = humanize.Time(resp.LastRefresh.UTC())

	return resp, nil
}

type score struct {
	Name          string              `json:"name"`
	Description   string              `json:"description"`
	FileSummaries []check.FileSummary `json:"file_summaries"`
	Weight        float64             `json:"weight"`
	Percentage    float64             `json:"percentage"`
	Error         string              `json:"error"`
}

type checksResp struct {
	Checks               []score   `json:"checks"`
	Average              float64   `json:"average"`
	Grade                Grade     `json:"grade"`
	Files                int       `json:"files"`
	Issues               int       `json:"issues"`
	Repo                 string    `json:"repo"`
	LastRefresh          time.Time `json:"last_refresh"`
	HumanizedLastRefresh string    `json:"humanized_last_refresh"`
}

func newChecksResp(repo string, forceRefresh bool) (tools.HtmlData, error) {
	if !forceRefresh {
		resp, err := getFromCache(repo)
		if err != nil {
			// just log the error and continue
			glog.Infoln(err)
		} else {
			return resp, nil
		}
	}

	// fetch the repo and grade it
	repoRoot, err := download.Download(repo, "repos/src")
	if err != nil {
		return tools.HtmlData{}, fmt.Errorf("could not clone repo: %v", err)
	}

	// go get repo
	githubIndex := strings.Index(repo, "github.com")
	if githubIndex < len(repo) {
		cmd := exec.Command("go", "get", "-u", repo[githubIndex:])
		err := cmd.Run()
		if err != nil {
			return tools.HtmlData{}, fmt.Errorf("could not go get repo: %v", err)
		}
	} else {
		return tools.HtmlData{}, fmt.Errorf("could not go get repo: %v", err)
	}

	repo = repoRoot.Root

	dir := dirName(repo)
	filenames, skipped, err := check.GoFiles(dir)
	if err != nil {
		return tools.HtmlData{}, fmt.Errorf("could not get filenames: %v", err)
	}
	if len(filenames) == 0 {
		return tools.HtmlData{}, fmt.Errorf("no .go files found")
	}

	err = check.RenameFiles(skipped)
	if err != nil {
		glog.Infoln("Could not remove files:", err)
	}
	defer check.RevertFiles(skipped)

	reporter := engine.NewReporter("")
	reporter.Engine(absSelfPackagePath(repo), "")
	resp, err := tools.Json2Html(reporter.FormateReport2Json())
	if err != nil {
		return tools.HtmlData{}, fmt.Errorf("run goreporter failed:", err)
	}
	return resp, nil
}

func absSelfPackagePath(repo string) string {
	return "." + string(filepath.Separator) + "repos" + string(filepath.Separator) + "src" + string(filepath.Separator) + repo
}

// ByWeight implements sorting for checks by weight descending
type ByWeight []score

func (a ByWeight) Len() int           { return len(a) }
func (a ByWeight) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }
func (a ByWeight) Less(i, j int) bool { return a[i].Weight > a[j].Weight }
