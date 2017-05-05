package handlers

import (
	"encoding/json"
	"net/http"

	"flag"
	"github.com/golang/glog"
	"html/template"
)

var domain = flag.String("domain", "goreporterweb.com", "Domain used for your goreporterweb installation")
var googleAnalyticsKey = flag.String("google_analytics_key", "UA-58936835-1", "Google Analytics Account Id")

// ReportHandler handles the report page
func ReportHandler(w http.ResponseWriter, r *http.Request, repo string, dev bool) {
	glog.Errorf("Displaying report: %q", repo)
	t := template.Must(template.New("report.html").Delims("[[", "]]").ParseFiles("templates/report.html"))
	resp, err := getFromCache(repo)
	needToLoad := false
	if err != nil {
		glog.Infoln("ERROR:", err) // log error, but continue
		needToLoad = true
	}

	respBytes, err := json.Marshal(resp)
	if err != nil {
		glog.Infoln("ERROR: marshaling json: ", err)
		http.Error(w, "Failed to load cache object", 500)
		return
	}

	t.Execute(w, map[string]interface{}{
		"repo":                 repo,
		"response":             string(respBytes),
		"loading":              needToLoad,
		"domain":               domain,
		"google_analytics_key": googleAnalyticsKey,
	})
}
