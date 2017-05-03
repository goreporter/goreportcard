package check

import (
	"bytes"
	"fmt"
	"log"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
)

// GoLint is the check for the go lint command
type GoReporter struct {
	Dir       string
	Filenames []string
}

// Name returns the name of the display name of the command
func (g GoReporter) Name() string {
	return "goreporter"
}

// Weight returns the weight this check has in the overall average
func (g GoReporter) Weight() float64 {
	return .0
}

// Percentage returns the percentage of .go files that pass golint
func (g GoReporter) Percentage() (err error) {
	fmt.Println(g.Dir)
	reportPath := strings.Replace(g.Dir, "repos"+string(filepath.Separator)+"src", "reports", -1)
	_, err = os.Stat(reportPath)
	if err != nil {
		err := os.MkdirAll(reportPath, 0777)
		if err != nil {
			log.Println("MkdirAll " + reportPath + " error.")
		}
	}
	cmd := exec.Command("goreporter", "-p", "."+string(filepath.Separator)+g.Dir, "-r", "."+string(filepath.Separator)+reportPath, "-f", "json")
	fmt.Println(cmd)
	var out bytes.Buffer
	cmd.Stdout = &out
	err = cmd.Run()
	if err != nil {
		return err
	}
	fmt.Println(out.String())
	return err
}

// Description returns the description of go lint
func (g GoReporter) Description() string {
	return `Goreporter is a golang tool that does static analysis, unit testing, code review and generate code quality report.`
}
