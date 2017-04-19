package handlers

import (
	"log"
	"net/http"
	"text/template"
)

// FeaturesHandler handles the about page
func FeaturesHandler(w http.ResponseWriter, r *http.Request) {
	log.Println("Serving features page")

	t := template.Must(template.New("features.html").Delims("[[", "]]").ParseFiles("templates/features.html"))
	t.Execute(w, map[string]interface{}{
		"google_analytics_key": googleAnalyticsKey,
	})
	return
}
