# Documentation

The documentation of **fsuire/hello** is provided under the form of a [gitbook](https://github.com/GitbookIO/gitbook).

## Use gitbook locally

Have (gitbook-cli)[https://github.com/GitbookIO/gitbook-cli] globally installed, then just do `gitbook serve`.

## Access the documentation through docker-compose

1. Make sure you have [docker-compose](https://docs.docker.com/compose/install/) installed
1. The following service might be present in `docker-compose.yml`, at the root of fsuire/hello:
```yaml
    documentation:
        build:
            context: ./
            dockerfile: Dockerfile-nodejs-development
        volumes:
            - ./:/application:rw
        ports:
            - "3002:3000"
        command: >
            sh -c '
              gitbook serve
            '
```
1. Just use docker-compose to build and run the development environment:
```bash
docker-compose up
```
then open a browser at [http://localhost:3002](http://localhost:3002).
1. You can use the `--build` option to force the build process of your containers:
```bash
docker-compose up --build
```
1. Do not forget you can have more than one docker-compose file:
```bash
docker-compose -f some-docker-compose.yml up
```