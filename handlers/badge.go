package handlers

import (
	"fmt"
	"net/http"
	"strings"

	"github.com/golang/glog"
)

// Grade represents a grade returned by the server, which is normally
// somewhere between A+ (highest) and F (lowest).
type Grade string

// The Grade constants below indicate the current available
// grades.
const (
	GradeAPlus Grade = "A+"
	GradeA           = "A"
	GradeB           = "B"
	GradeC           = "C"
	GradeD           = "D"
	GradeE           = "E"
	GradeF           = "F"
)

// grade is a helper for getting the grade for a percentage
func grade(percentage float64) Grade {
	switch {
	case percentage > 90:
		return GradeAPlus
	case percentage > 80:
		return GradeA
	case percentage > 70:
		return GradeB
	case percentage > 60:
		return GradeC
	case percentage > 50:
		return GradeD
	case percentage > 40:
		return GradeE
	default:
		return GradeF
	}
}

func badgePath(grade Grade, style string, dev bool) string {
	return fmt.Sprintf("assets/badges/%s_%s.svg", strings.ToLower(string(grade)), strings.ToLower(style))
}

// BadgeHandler handles fetching the badge images
func BadgeHandler(w http.ResponseWriter, r *http.Request, repo string, dev bool) {
	name := fmt.Sprintf("%s", repo)
	var (
		branch string
	)
	if strings.HasPrefix(name, "skylar_server_tools_code") {
		branchIndex := strings.Index(name, "/")
		if branchIndex >= 0 && branchIndex < len(name) {
			branch = name[(branchIndex + 1):]
		}
		name = "https://hqgit01.intra.legendsec.com/360wangguanban/skylar_server_tools_code"
	}
	resp, err := newChecksResp(name, branch, false)

	// See: http://shields.io/#styles
	style := r.URL.Query().Get("style")
	if style == "" {
		style = "flat"
	}

	if err != nil {
		glog.Errorf("ERROR: fetching badge for %s: %v", name, err)
		url := "https://img.shields.io/badge/go%20report-error-lightgrey.svg?style=" + style
		http.Redirect(w, r, url, http.StatusTemporaryRedirect)
		return
	}

	w.Header().Set("Cache-control", "no-store, no-cache, must-revalidate")
	http.ServeFile(w, r, badgePath(grade(float64(resp.Score)), style, dev))
}
