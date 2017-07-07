package handlers

import (
	"fmt"
	"html/template"
	"net/http"

	"github.com/golang/glog"
)

func errorHandler(w http.ResponseWriter, r *http.Request, status int) {
	glog.Infoln(fmt.Sprintf("%s %s:%s,%s", r.RemoteAddr, r.Method, r.URL, r.Form))
	w.WriteHeader(status)
	if status == http.StatusNotFound {
		t := template.Must(template.New("404.html").ParseFiles("templates/404.html"))
		t.Execute(w, nil)
	}
}
