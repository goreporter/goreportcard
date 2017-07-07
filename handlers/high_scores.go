package handlers

import (
	"container/heap"
	"encoding/json"
	"fmt"
	"html/template"
	"net/http"
	"strings"
	"time"

	"github.com/boltdb/bolt"
	"github.com/dustin/go-humanize"
	"github.com/golang/glog"
)

func add(x, y int) int {
	return x + y
}

func formatScore(x float64) string {
	return fmt.Sprintf("%.2f", x)
}

// HighScoresHandler handles the stats page
func HighScoresHandler(w http.ResponseWriter, r *http.Request) {
	glog.Infoln(fmt.Sprintf("%s %s:%s,%s", r.RemoteAddr, r.Method, r.URL, r.Form))
	// write to boltdb
	db, err := bolt.Open(DBPath, 0755, &bolt.Options{Timeout: 1 * time.Second})
	if err != nil {
		glog.Infoln("Failed to open bolt database: ", err)
		return
	}
	defer db.Close()

	count, scores, stats := 0, &scoreHeap{}, make([]int, 101, 101)
	err = db.View(func(tx *bolt.Tx) error {
		hsb := tx.Bucket([]byte(MetaBucket))
		if hsb == nil {
			return fmt.Errorf("high score bucket not found")
		}
		scoreBytes := hsb.Get([]byte("scores"))
		if scoreBytes == nil {
			scoreBytes, err = json.Marshal([]scoreHeap{})
			if err != nil {
				return err
			}
		}
		json.Unmarshal(scoreBytes, scores)

		statsBytes := hsb.Get([]byte("stats"))
		if statsBytes == nil {
			statsBytes, err = json.Marshal(stats)
			if err != nil {
				return err
			}
		}
		json.Unmarshal(statsBytes, &stats)

		heap.Init(scores)

		total := hsb.Get([]byte("total_repos"))
		if total == nil {
			count = 0
			return nil
		}
		return json.Unmarshal(total, &count)
	})

	if err != nil {
		glog.Infoln("ERROR: Failed to load high scores from bolt database: ", err)
		http.Error(w, err.Error(), 500)
		return
	}

	funcs := template.FuncMap{"add": add, "formatScore": formatScore}
	t := template.Must(template.New("high_scores.html").Delims("[[", "]]").Funcs(funcs).ParseFiles("templates/high_scores.html"))

	sortedScores := make([]scoreItem, len(*scores))
	for i := range sortedScores {
		lastItem := heap.Pop(scores).(scoreItem)
		repoPath := strings.Split(lastItem.Repo, "/")
		if len(repoPath) > 3 {
			lastItem.RepoAddr = fmt.Sprintf("%s/tree/%s", strings.Join(repoPath[0:3], "/"), strings.Join(repoPath[3:], "/"))
		} else {
			lastItem.RepoAddr = lastItem.Repo
		}
		sortedScores[len(sortedScores)-i-1] = lastItem
	}

	t.Execute(w, map[string]interface{}{
		"HighScores":           sortedScores,
		"Stats":                stats,
		"Count":                humanize.Comma(int64(count)),
		"google_analytics_key": googleAnalyticsKey,
	})
}
