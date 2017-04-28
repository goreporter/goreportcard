FROM golang:1.6

RUN go get golang.org/x/tools/go/vcs

COPY . $GOPATH/src/github.com/goreporter/goreporterweb

WORKDIR $GOPATH/src/github.com/goreporter/goreporterweb

EXPOSE 8080

CMD ["make", "start"]
