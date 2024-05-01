CONTAINER_RUNTIME=podman
LABEL=ghcr.io/apscandy/cab230-react
TAG=latest
SBOM_FILE=sbom.json
CONTAINER_NAME=cab230-react

.DEFAULT_GOAL := build
.PHONY: run build preview
# .ONESHELL:

# syft https://github.com/anchore/syft
# grype https://github.com/anchore/grype
# is needed for the command to work 
cve-check:
	syft ${LABEL}:${TAG} -o cyclonedx-json=${SBOM_FILE}
	grype sbom:${SBOM_FILE}
	grype dir:.

build:
	npm audit
	npm run lint
	npm run build

preview: build
	npm run preview

build-image: build
	${CONTAINER_RUNTIME} build -t ${LABEL}:${TAG} -f containerfile

build-image-fresh:
	${CONTAINER_RUNTIME} build -t ${LABEL}:${TAG} -f build.containerfile
	${CONTAINER_RUNTIME} image prune -f

run-image:
	${CONTAINER_RUNTIME} run --name=${CONTAINER_NAME} -d -p 8080:80/tcp ${LABEL}

stop-image:
	${CONTAINER_RUNTIME} kill ${CONTAINER_NAME}
	${CONTAINER_RUNTIME} rm ${CONTAINER_NAME}

push-image: build-image-fresh
	${CONTAINER_RUNTIME} push ${LABEL}:${TAG}

