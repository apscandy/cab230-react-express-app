CONTAINER_RUNTIME=podman
LABEL=ghcr.io/apscandy/cab230-mysql-database
TAG=latest
SBOM_FILE=sbom.json
CONTAINER_NAME=cab230-mysql-database

.DEFAULT_GOAL := build-image
.PHONY: run build preview


cve-check:
	syft ${LABEL}:${TAG} -o cyclonedx-json=${SBOM_FILE}
	grype sbom:${SBOM_FILE}
	grype dir:.

build-image:
	${CONTAINER_RUNTIME} build -t ${LABEL}:${TAG} -f dockerfile

run-image:
	${CONTAINER_RUNTIME} run --name=${CONTAINER_NAME} -p 3306:3306/tcp -d ${LABEL}

stop-image:
	${CONTAINER_RUNTIME} kill ${CONTAINER_NAME}
	${CONTAINER_RUNTIME} rm ${CONTAINER_NAME}
