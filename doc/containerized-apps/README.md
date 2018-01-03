# Containerized apps

A containerized app is an application inside a docker container. Here's a few rules:

1. In a development environment, the code of a containerized app leaves in an eponym directory at the root of fsuire/hello. The containerized app is run through docker or docker-compose.
1. In a clusterized environment, the containerized app is ran through a docker container somewhere on a node of a kubernetes cluster.
1. A containerized app must have at least two dockerfile at its root: `Dockerfile-development` and `Dockerfile-cluster`. The "development" one should provide mecanisms to develop quickly, while the "cluster" one should copy the codebase in the image and immediately launch an optimized process.
1. If a containerized app has to work with other containerized apps:
  - In a development environment, docker-compose should be prefered to configure and launch all of them. Docker-compose is much lighter than a real kubernetes cluster or a minikube one, so it is more adapted to a development environment. A `docker-compose.yml` is therefore required and should reside at the root of fsuire/hello.

## How to deploy a containerized app in a clusterized environment

### On the development device, with Minikube

1. Make sure you have [VirtualBox, kubectl and Minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/) installed
1. Start Minikube with `minikube start`
1. To work with the Minikube docker daemon from your mac/linux host, type `eval $(minikube docker-env)` in a terminal. Each docker command typed in that and only that terminal will use the Minikube docker daemon.
1. If it's not already done, run a local docker registry using the Minikube docker daemon: `docker run -d -p 5000:5000 --restart=always --name registry registry:2`
1. Create a cluster-ready image of the app using the Minikube docker daemon (the README.md of the app should explain how)
1. Tag your image like this: `docker tag your/image:v1 localhost:5000/your/image:v1`
