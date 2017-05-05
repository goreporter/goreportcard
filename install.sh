#!/bin/bash

echo "set GOPATH..."
PARENTFOLDER=$(dirname $(pwd))
REPOSDIR="repos"
NOWGOPATH=${PARENTFOLDER}/${REPOSDIR}
export GOPATH=$GOPATH:$NOWGOPATH
echo "GOPATH:"$GOPATH
echo "set GOPATH done"
echo "go get github.com/wgliang/goreporter..."
go get -u github.com/wgliang/goreporter
echo "go get github.com/wgliang/goreporter done"
echo "go build goreporterweb..."
go build
echo "go build goreporterweb done"
echo "running goreporterweb"
./goreporterweb --log_dir="./logs" -v=5 &
exit