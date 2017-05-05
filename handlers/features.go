package handlers

import (
	"net/http"
	"text/template"

	"github.com/golang/glog"
)

// FeaturesHandler handles the about page
func FeaturesHandler(w http.ResponseWriter, r *http.Request) {
	glog.Infoln("Serving features page")

	t := template.Must(template.New("features.html").Delims("[[", "]]").ParseFiles("templates/features.html"))
	t.Execute(w, map[string]interface{}{
		"google_analytics_key": googleAnalyticsKey,
	})
	return
}
