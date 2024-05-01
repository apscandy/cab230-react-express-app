CONTAINER_RUNTIME=podman
LABEL=ghcr.io/apscandy/cab230-react-express-app
TAG=latest
SBOM_FILE=sbom.json
CONTAINER_NAME=cab230-fullstack

.DEFAULT_GOAL := build-image
.PHONY: run build

cve-check:
	syft ${LABEL}:${TAG} -o cyclonedx-json=${SBOM_FILE}
	grype sbom:${SBOM_FILE}
	grype dir:.

build-image: 
	${CONTAINER_RUNTIME} build -t ${LABEL}:${TAG} -f containerfile
	${CONTAINER_RUNTIME} image prune -f

run-image:
	${CONTAINER_RUNTIME} run --name=${CONTAINER_NAME} -d -p 8080:3000/tcp ${LABEL}

stop-image:
	${CONTAINER_RUNTIME} kill ${CONTAINER_NAME}
	${CONTAINER_RUNTIME} rm ${CONTAINER_NAME}

push-image: build-image
	${CONTAINER_RUNTIME} push ${LABEL}:${TAG}
