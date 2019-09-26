# Documentation

The documentation of **fsuire/hello** is provided under the form of a [gitbook](https://github.com/GitbookIO/gitbook).

## Use gitbook locally

Have [gitbook-cli](https://github.com/GitbookIO/gitbook-cli) globally installed, then just do `gitbook serve`.

## Access the documentation through docker-compose

1. Make sure you have [docker-compose](https://docs.docker.com/compose/install/) installed
1. Use the `docker-compose.doc.yml` file :
```bash
docker-compose -f docker-compose.doc.yml up
```
1. The documentation should be served at [http://localhost:4000](http://localhost:4000)
