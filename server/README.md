# Server - The backend app

The node js backend of the **fsuire/hello** application.

This code is designed to eventually be run in a kubernetes [Kubernetes](https://kubernetes.io/) cluster.

## Development

There are several ways to develop:
1. Use the `server/Dockerfile-development` file to build an image then launch a container. Every change change made to a dockerfile should be committed.
1. Use docker-compose and the `./docker-compose.yml` file to launch several interdependent containers. Every change change made to a docker-compose file should be committed.

### prerequisites
Have [docker](https://docs.docker.com/engine/installation/) installed.

### Developing with the `Dockerfile-development`

Build the image (where `fsuire/hello:dev` is the name - and the tag - of the image):
```bash
docker build -t fsuire/hello:dev --file ./Dockerfile-nodejs-development server/.
```

Make a running container (named `hello_dev`):
```bash
docker run -d -it -p 3001:3000 -v $PWD/server:/app --name hello_dev fsuire/hello:dev bash
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
            context: ./
            dockerfile: Dockerfile-nodejs-development
        volumes:
            - ./server:/app:rw
        environment:
            - HTTP_PORT=3000
        ports:
            - "3001:3000"
        command: >
            sh -c '
              npm i && npm start
            '
```
1. Just use docker-compose to build and run the development environment:
```bash
docker-compose up
```
then open a browser at [http://localhost:3001](http://localhost:3001).
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

To quickly test the newly created image, you can make it run in a container.
```bash
docker run -d -it -p 3001:3000 --name hello fsuire/hello:latest
```
