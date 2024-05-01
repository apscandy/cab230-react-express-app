CONTAINER_RUNTIME=podman
LABEL=ghcr.io/apscandy/cab230-express
TAG=latest
SBOM_FILE=sbom.json
CONTAINER_NAME=cab230-express

.DEFAULT_GOAL := build-image
.PHONY: run build preview
# .ONESHELL:

# syft https://github.com/anchore/syft
# grype https://github.com/anchore/grype
# is needed for the command to work 
cve-check:
	syft ${LABEL}:${TAG} -o cyclonedx-json=${SBOM_FILE}
	grype sbom:${SBOM_FILE}
	grype dir:.

add-frontend:
	cp -r ../client/dist . 

build-image: add-frontend
	${CONTAINER_RUNTIME} build -t ${LABEL}:${TAG} -f containerfile


run-image:
	${CONTAINER_RUNTIME} run --name=${CONTAINER_NAME} -d -p 8080:3000/tcp ${LABEL}

stop-image:
	${CONTAINER_RUNTIME} kill ${CONTAINER_NAME}
	${CONTAINER_RUNTIME} rm ${CONTAINER_NAME}


push-image: build-image-fresh
	${CONTAINER_RUNTIME} push ${LABEL}:${TAG}



