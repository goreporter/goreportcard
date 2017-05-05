package handlers

import (
	"net/http"

	"github.com/golang/glog"
)

// AssetsHandler handles serving static files
func AssetsHandler(w http.ResponseWriter, r *http.Request) {
	glog.Infoln("Serving " + r.URL.Path[1:])

	http.ServeFile(w, r, r.URL.Path[1:])
}

// FaviconHandler handles serving the favicon.ico
func FaviconHandler(w http.ResponseWriter, r *http.Request) {
	glog.Infoln("Serving " + r.URL.Path[1:])
	http.ServeFile(w, r, "assets/favicon.ico")
}
