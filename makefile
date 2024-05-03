CONTAINER_RUNTIME=podman
TAG=latest
SBOM_FILE=sbom.json
PODMAN_POD_NAME=cab230

FULLSTACK_LABEL=ghcr.io/apscandy/cab230-react-express-app
FULLSTACK_CONTAINER_NAME=cab230-fullstack

CLIENT_LABEL=ghcr.io/apscandy/cab230-react
CLIENT_CONTAINER_NAME=cab230-react

SERVER_LABEL=ghcr.io/apscandy/cab230-express
SERVER_CONTAINER_NAME=cab230-express

DATABASE_LABEL=ghcr.io/apscandy/cab230-mysql-database
DATABASE_CONTAINER_NAME=cab230-mysql-database

.DEFAULT_GOAL := build-image
.PHONY: run build

cve-check:
	syft ${LABEL}:${TAG} -o cyclonedx-json=${SBOM_FILE}
	grype sbom:${SBOM_FILE}
	grype dir:.

build-image: 
	${CONTAINER_RUNTIME} build -t ${LABEL}:${TAG} -f dockerfile
	${CONTAINER_RUNTIME} image prune -f

build-all-image: 
	${CONTAINER_RUNTIME} build -t ${FULLSTACK_LABEL}:${TAG} -f dockerfile
	${CONTAINER_RUNTIME} build -t ${CLIENT_LABEL}:${TAG} -f client/dockerfile
	${CONTAINER_RUNTIME} build -t ${SERVER_LABEL}:${TAG} -f server/dockerfile
	${CONTAINER_RUNTIME} build -t ${DATABASE_LABEL}:${TAG} -f database/dockerfile
	${CONTAINER_RUNTIME} image prune -f

run-image:
	${CONTAINER_RUNTIME} run --name=${FULLSTACK_CONTAINER_NAME} -d -p 8080:3000/tcp ${FULLSTACK_LABEL}


stop-image:
	${CONTAINER_RUNTIME} kill ${CONTAINER_NAME}
	${CONTAINER_RUNTIME} rm ${CONTAINER_NAME}

push-image: build-image
	${CONTAINER_RUNTIME} push ${LABEL}:${TAG}

pod-run: build-all-image
	podman pod create --label ${PODMAN_POD_NAME} --name ${PODMAN_POD_NAME} -p 8080:80 -p 8081:3000 -p 3306:3306
	podman run --pod ${PODMAN_POD_NAME} --name=${CLIENT_CONTAINER_NAME} -d ${CLIENT_LABEL}
	podman run --pod ${PODMAN_POD_NAME} --name=${SERVER_CONTAINER_NAME} -d ${SERVER_LABEL}
	podman run --pod ${PODMAN_POD_NAME} --name=${DATABASE_CONTAINER_NAME} -d ${DATABASE_LABEL}

pod-run-kube:
	podman play kube local-pods.yaml

pod-stop:
	podman pod stop ${PODMAN_POD_NAME}
	podman pod rm ${PODMAN_POD_NAME}

push-all-image: build-all-image
	${CONTAINER_RUNTIME} push ${FULLSTACK_LABEL}:${TAG}
	${CONTAINER_RUNTIME} push ${CLIENT_LABEL}:${TAG}
	${CONTAINER_RUNTIME} push ${SERVER_LABEL}:${TAG} 
	${CONTAINER_RUNTIME} push ${DATABASE_LABEL}:${TAG}