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

build:
	npm audit
	npm run lint
	npm run build

preview: build
	npm run preview

build-image: build
	podman build -t ${LABEL}:${TAG} -f dockerfile

build-image-fresh:
	podman build -t ${LABEL}:${TAG} -f build.dockerfile
	podman image prune -f

run-image:
	podman run --name=${CONTAINER_NAME} -d -p 8080:80/tcp ${LABEL}

stop-image:
	podman kill ${CONTAINER_NAME}
	podman rm ${CONTAINER_NAME}

push-image: build-image-fresh
	podman push ${LABEL}:${TAG}

