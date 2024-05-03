TAG=latest
PODMAN_POD_NAME=cab230

FULLSTACK_LABEL=ghcr.io/apscandy/cab230-react-express-app
FULLSTACK_CONTAINER_NAME=cab230-fullstack

CLIENT_LABEL=ghcr.io/apscandy/cab230-react
CLIENT_CONTAINER_NAME=cab230-react

SERVER_LABEL=ghcr.io/apscandy/cab230-express
SERVER_CONTAINER_NAME=cab230-express

DATABASE_LABEL=ghcr.io/apscandy/cab230-mysql-database
DATABASE_CONTAINER_NAME=cab230-mysql-database

.DEFAULT_GOAL := build
.PHONY: run build

build: 
	podman build -t ${CLIENT_LABEL}:${TAG} -f client/build.dockerfile
	podman build -t ${SERVER_LABEL}:${TAG} -f server/build.dockerfile
	podman build -t ${DATABASE_LABEL}:${TAG} -f database/dockerfile
	podman image prune -f

pod-run:
	podman pod create --label ${PODMAN_POD_NAME} --name ${PODMAN_POD_NAME} -p 8080:80/tcp -p 8081:3000/tcp -p 3306:3306/tcp
	podman run --pod ${PODMAN_POD_NAME} --name=${CLIENT_CONTAINER_NAME} -d ${CLIENT_LABEL}
	podman run --pod ${PODMAN_POD_NAME} --name=${SERVER_CONTAINER_NAME} -d ${SERVER_LABEL}
	podman run --pod ${PODMAN_POD_NAME} --name=${DATABASE_CONTAINER_NAME} -d ${DATABASE_LABEL}

pod-stop:
	podman pod stop ${PODMAN_POD_NAME}
	podman pod rm ${PODMAN_POD_NAME}

push-all-image: build-all-image
	podman push ${CLIENT_LABEL}:${TAG}
	podman push ${SERVER_LABEL}:${TAG} 
	podman push ${DATABASE_LABEL}:${TAG}