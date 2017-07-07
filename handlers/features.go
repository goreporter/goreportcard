package handlers

import (
	"fmt"
	"net/http"
	"text/template"

	"github.com/golang/glog"
)

// FeaturesHandler handles the about page
func FeaturesHandler(w http.ResponseWriter, r *http.Request) {
	glog.Infoln("Serving features page")
	glog.Infoln(fmt.Sprintf("%s %s:%s,%s", r.RemoteAddr, r.Method, r.URL, r.Form))
	t := template.Must(template.New("features.html").Delims("[[", "]]").ParseFiles("templates/features.html"))
	t.Execute(w, map[string]interface{}{
		"google_analytics_key": googleAnalyticsKey,
	})
	return
}
