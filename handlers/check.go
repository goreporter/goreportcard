package handlers

import (
	"container/heap"
	"encoding/json"
	"fmt"
	"net/http"
	"strings"
	"time"

	"github.com/boltdb/bolt"
	"github.com/golang/glog"
	"github.com/goreporter/goreporterweb/download"
	"github.com/wgliang/goreporter/tools"
)

const (
	// DBPath is the relative (or absolute) path to the bolt database file
	DBPath string = "goreporter.db"

	// RepoBucket is the bucket in which repos will be cached in the bolt DB
	RepoBucket string = "repos"

	// MetaBucket is the bucket containing the names of the projects with the
	// top 100 high scores, and other meta information
	MetaBucket string = "meta"
)

// CheckHandler handles the request for checking a repo
func CheckHandler(w http.ResponseWriter, r *http.Request) {
	glog.Infoln(fmt.Sprintf("%s %s:%s,%s", r.RemoteAddr, r.Method, r.URL, r.Form))
	w.Header().Set("Content-Type", "application/json")
	repoPackage := strings.TrimSuffix(r.FormValue("repo"), "/")

	// formate branch string
	branch := strings.TrimSuffix(r.FormValue("branch"), "/")
	branchs := strings.Split(branch, "/")
	branch = strings.Join(branchs, "/")

	repoPathsList := strings.Split(repoPackage, "/")
	if len(repoPathsList) > 3 && branch == "" {
		repoPackage = strings.Join(repoPathsList[0:3], "/")
		branch = strings.Join(repoPathsList[3:], "/")
	}
	checksRespKey := fmt.Sprintf("%s/%s", repoPackage, branch)

	var (
		repo string
		err  error
	)

	repo, err = download.Clean(repoPackage)
	if err != nil {
		glog.Errorln("ERROR: from download.Clean:", err)
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte(`Could not download the repository: ` + err.Error()))
		return
	}

	glog.Infof("Checking repo %s/%s", repoPackage, branch)

	forceRefresh := r.Method != "GET" // if this is a GET request, try to fetch from cached version in boltdb first
	resp, err := newChecksResp(repo, branch, forceRefresh)
	if err != nil {
		glog.Errorln("ERROR: from newChecksResp:", repo, ":", err)
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte(`Could not download the repository.`))
		return
	}

	respBytes, err := json.Marshal(resp)
	if err != nil {
		glog.Errorln("ERROR: could not marshal json:", err)
		http.Error(w, err.Error(), 500)
		return
	}

	// write to boltdb
	db, err := bolt.Open(DBPath, 0755, &bolt.Options{Timeout: 1 * time.Second})
	if err != nil {
		glog.Errorln("Failed to open bolt database: ", err)
		return
	}
	defer db.Close()

	// is this a new repo? if so, increase the count in the high scores bucket later
	isNewRepo := false
	var oldRepoBytes []byte
	err = db.View(func(tx *bolt.Tx) error {
		b := tx.Bucket([]byte(RepoBucket))
		if b == nil {
			return fmt.Errorf("repo bucket not found")
		}
		oldRepoBytes = b.Get([]byte(checksRespKey))
		return nil
	})
	if err != nil {
		glog.Errorln(err)
	}

	// get the old score and store it for stats updating
	var oldScore *float64
	if isNewRepo = oldRepoBytes == nil; !isNewRepo {
		oldRepo := checksResp{}
		err = json.Unmarshal(oldRepoBytes, &oldRepo)
		if err != nil {
			glog.Errorln("ERROR: could not unmarshal json:", err)
			http.Error(w, err.Error(), 500)
			return
		}
		oldScore = &oldRepo.Average
	}

	// if this is a new repo, or the user force-refreshed, update the cache
	if isNewRepo || forceRefresh {
		err = db.Update(func(tx *bolt.Tx) error {
			glog.Errorf("Saving repo %q to cache...", checksRespKey)

			b := tx.Bucket([]byte(RepoBucket))
			if b == nil {
				return fmt.Errorf("repo bucket not found")
			}

			// save repo to cache
			err = b.Put([]byte(checksRespKey), respBytes)
			if err != nil {
				return err
			}

			// fetch meta-bucket
			mb := tx.Bucket([]byte(MetaBucket))
			if mb == nil {
				return fmt.Errorf("high score bucket not found")
			}

			// update total repos count
			if isNewRepo {
				err = updateReposCount(mb, resp, checksRespKey)
				if err != nil {
					return err
				}
			}

			err = updateHighScores(mb, resp, checksRespKey)
			if err != nil {
				return err
			}

			return updateStats(mb, resp, checksRespKey, oldScore)
		})

		if err != nil {
			glog.Infoln("Bolt writing error:", err)
		}

	}

	err = db.Update(func(tx *bolt.Tx) error {
		// fetch meta-bucket
		mb := tx.Bucket([]byte(MetaBucket))
		if mb == nil {
			return fmt.Errorf("meta bucket not found")
		}

		return updateRecentlyViewed(mb, checksRespKey)
	})

	b, err := json.Marshal(map[string]string{"redirect": "/report/" + checksRespKey})
	if err != nil {
		glog.Infoln("JSON marshal error:", err)
	}
	w.WriteHeader(http.StatusOK)
	w.Write(b)
	return
}

func updateHighScores(mb *bolt.Bucket, resp tools.HtmlData, repo string) error {
	// start updating high score list
	scoreBytes := mb.Get([]byte("scores"))
	if scoreBytes == nil {
		scoreBytes, _ = json.Marshal([]scoreHeap{})
	}
	scores := &scoreHeap{}
	json.Unmarshal(scoreBytes, scores)

	heap.Init(scores)
	if len(*scores) > 0 && (*scores)[0].Score > float64(resp.Score) && len(*scores) == 50 {
		// lowest score on list is higher than this repo's score, so no need to add, unless
		// we do not have 50 high scores yet
		return nil
	}
	// if this repo is already in the list, remove the original entry:
	for i := range *scores {
		if strings.ToLower((*scores)[i].Repo) == strings.ToLower(repo) {
			heap.Remove(scores, i)
			break
		}
	}
	// now we can safely push it onto the heap
	heap.Push(scores, scoreItem{
		Repo:   repo,
		Score:  float64(resp.Score),
		Files:  resp.SimpleIssues,
		Issues: resp.Issues,
	})
	if len(*scores) > 50 {
		// trim heap if it's grown to over 50
		*scores = (*scores)[1:51]
	}
	scoreBytes, err := json.Marshal(&scores)
	if err != nil {
		return err
	}
	err = mb.Put([]byte("scores"), scoreBytes)
	if err != nil {
		return err
	}

	return nil
}

func updateStats(mb *bolt.Bucket, resp tools.HtmlData, repo string, oldScore *float64) error {
	scores := make([]int, 101, 101)
	statsBytes := mb.Get([]byte("stats"))
	if statsBytes == nil {
		statsBytes, _ = json.Marshal(scores)
	}
	err := json.Unmarshal(statsBytes, &scores)
	if err != nil {
		return err
	}
	scores[resp.Score]++
	if oldScore != nil {
		scores[int(*oldScore*100)]--
	}
	newStats, err := json.Marshal(scores)
	if err != nil {
		return err
	}
	err = mb.Put([]byte("stats"), newStats)
	if err != nil {
		return err
	}
	return nil
}

func updateReposCount(mb *bolt.Bucket, resp tools.HtmlData, repo string) (err error) {
	glog.Errorf("New repo %q, adding to repo count...", repo)
	totalInt := 0
	total := mb.Get([]byte("total_repos"))
	if total != nil {
		err = json.Unmarshal(total, &totalInt)
		if err != nil {
			return fmt.Errorf("could not unmarshal total repos count: %v", err)
		}
	}
	totalInt++ // increase repo count
	total, err = json.Marshal(totalInt)
	if err != nil {
		return fmt.Errorf("could not marshal total repos count: %v", err)
	}
	mb.Put([]byte("total_repos"), total)
	glog.Infoln("Repo count is now", totalInt)
	return nil
}

type recentItem struct {
	Repo string
}

func updateRecentlyViewed(mb *bolt.Bucket, repo string) error {
	b := mb.Get([]byte("recent"))
	if b == nil {
		b, _ = json.Marshal([]recentItem{})
	}
	recent := []recentItem{}
	json.Unmarshal(b, &recent)

	// add it to the slice, if it is not in there already
	for i := range recent {
		if recent[i].Repo == repo {
			return nil
		}
	}

	recent = append(recent, recentItem{Repo: repo})
	if len(recent) > 5 {
		// trim recent if it's grown to over 5
		recent = (recent)[1:6]
	}
	b, err := json.Marshal(&recent)
	if err != nil {
		return err
	}
	err = mb.Put([]byte("recent"), b)
	if err != nil {
		return err
	}

	return nil
}
