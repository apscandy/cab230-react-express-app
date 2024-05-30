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
	podman build -t ${LABEL}:${TAG} -f dockerfile
	podman image prune -f

run-image:
	podman run --name=${CONTAINER_NAME} -d -p 8443:3000/tcp -p 8080:2080/tcp ${LABEL}

stop-image:
	podman kill ${CONTAINER_NAME}
	podman rm ${CONTAINER_NAME}

push-image: build-image
	podman push ${LABEL}:${TAG}



