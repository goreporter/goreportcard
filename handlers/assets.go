package handlers

import (
	"fmt"
	"net/http"

	"github.com/golang/glog"
)

// AssetsHandler handles serving static files
func AssetsHandler(w http.ResponseWriter, r *http.Request) {
	glog.Infoln("Serving " + r.URL.Path[1:])
	glog.Infoln(fmt.Sprintf("%s %s:%s,%s", r.RemoteAddr, r.Method, r.URL, r.Form))
	http.ServeFile(w, r, r.URL.Path[1:])
}

// FaviconHandler handles serving the favicon.ico
func FaviconHandler(w http.ResponseWriter, r *http.Request) {
	glog.Infoln("Serving " + r.URL.Path[1:])
	http.ServeFile(w, r, "assets/favicon.ico")
}
