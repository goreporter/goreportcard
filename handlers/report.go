package handlers

import (
	"flag"
	"html/template"
	"net/http"

	"github.com/golang/glog"
)

var domain = flag.String("domain", "goreporterweb.com", "Domain used for your goreporterweb installation")
var googleAnalyticsKey = flag.String("google_analytics_key", "", "Google Analytics Account Id")

// ReportHandler handles the report page
func ReportHandler(w http.ResponseWriter, r *http.Request, repo string, dev bool) {
	glog.Errorf("Displaying report: %q", repo)
	t := template.Must(template.New("report.html").Delims("[[", "]]").ParseFiles("templates/report.html"))
	resp, err := getFromCache(repo)
	// needToLoad := false
	if err != nil {
		glog.Infoln("ERROR:", err) // log error, but continue
		// needToLoad = true
	}

	t.Execute(w, map[string]interface{}{
		"score":          resp.Score,
		"avgcover":       resp.TestSummaryCoverAvg,
		"date":           resp.Date,
		"pkgcover":       resp.AveragePackageCover,
		"gosimple_issue": resp.SimpleIssues,
		"deadcode_count": resp.DeadcodeIssues,
		"cycol_count":    resp.CycloBigThan15,
		"project":        resp.Project,
		"res":            resp.Tests,
		"summary":        resp.Score,
		"noTest":         resp.NoTests,
		"gosimple":       resp.Simples,
		"gosimpleLevel":  2,
		"deadcode":       resp.Deadcodes,
		"copycode":       resp.Copycodes,
		"gocyclo":        resp.Cyclos,
		"godepgraph_svg": string(resp.DepGraph),
	})
}
