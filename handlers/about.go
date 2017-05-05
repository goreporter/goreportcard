package handlers

import (
	"net/http"
	"text/template"

	"github.com/golang/glog"
)

// AboutHandler handles the about page
func AboutHandler(w http.ResponseWriter, r *http.Request) {
	glog.Infoln("Serving about page")

	t := template.Must(template.New("about.html").Delims("[[", "]]").ParseFiles("templates/about.html"))
	t.Execute(w, map[string]interface{}{
		"google_analytics_key": googleAnalyticsKey,
	})
	return
}
