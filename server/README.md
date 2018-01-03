# Server - The backend app

The node js backend of the **fsuire/hello** application.

This code is designed to eventually be run in a kubernetes [Kubernetes](https://kubernetes.io/) cluster.

## Development

There are several ways to develop:
1. Use the `server/Dockerfile-development` file to build an image then launch a container. Every change change made to a dockerfile should be committed.
1. Use docker-compose and the `./docker-compose.yml` file to launch several interdependent containers. Every change change made to a docker-compose file should be committed.

### prerequisites
1. Make sure you have [docker](https://docs.docker.com/engine/installation/) installed
1. Make sure you have a valid self-signed SSL certificate for the "development" environment (have a look to the appendices of the fsuire/hello documentation)
1. Make sure you have a `env_file_development` file (at the root of this server app, create a `env_file_development` file by duplicating the `env_file.template` file. Then edit your `env_file_development` file and fill its variables with the correct values. An `env_file` should never be comitted).

### Developing with the `Dockerfile-development`

Build the image (where `fsuire/hello:dev` is the name - and the tag - of the image):
```bash
docker build -t fsuire/hello:dev --file server/Dockerfile-development server/.
```

Make a running container (named `hello_dev`):
```bash
docker run -d -it -p 3000:3000 -p 3001:3001 -v $PWD/server:/application --env-file=server/env_file_development --name hello_dev fsuire/hello:dev bash
```

Enter your running container:
```bash
docker exec -ti hello_dev bash
```

From there, you can execute any command. For instance:
```bash
npm i
npm start
```

### Developing with docker-compose

1. Make sure you have [docker-compose](https://docs.docker.com/compose/install/) installed
1. The following service might be present in `docker-compose.yml`, at the root of fsuire/hello:
```yaml
    server:
        build:
            context: ./server
            dockerfile: Dockerfile-development
        env_file: ./server/env_file_development
        volumes:
            - ./server:/application:rw
        environment:
            - HTTP_PORT=3000
            - HTTPS_PORT=3001
        ports:
            - "3000:3000"
            - "3001:3001"
        command: >
            sh -c '
              npm i && npm start
            '
```
1. Just use docker-compose to build and run the development environment:
```bash
docker-compose up
```
1. You can use the `--build` option to force the build process of your containers:
```bash
docker-compose up --build
```
1. Do not forget you can have more than one docker-compose file:
```bash
docker-compose -f some-docker-compose.yml up
```

## Make a cluster-ready image

Build an image (do not forget to provide the desired environment with the `--build-arg` option):
```bash
docker build -t fsuire/hello:latest --file server/Dockerfile-cluster --build-arg NODE_ENV=production server/.
```

To quickly test the newly created image, you can make it running in a container. In that purpose, ake sure you have a `env_file_production` file (at the root of this server app, create a `env_file_production` file by duplicating the `env_file.template` file. Then edit your `env_file_production` file and fill its variables with the correct values. An `env_file` should never be comitted.
```bash
docker run -d -it -p 80:3000 -p 443:3001 --env-file=server/env_file_production --name hello fsuire/hello:latest
```
