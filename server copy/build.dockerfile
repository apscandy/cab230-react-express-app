FROM ghcr.io/apscandy/cab230-react:latest AS frontend

FROM docker.io/node:22-bullseye-slim AS build

LABEL maintainer="n11270179@qut.edu.au"

LABEL org.opencontainers.image.source=https://github.com/apscandy/cab230-react-express-app

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY --from=frontend /var/www /app/dist

RUN npm install pm2 -g

COPY . .

EXPOSE 3000

EXPOSE 2080

CMD ["pm2-runtime", "start", "prod.yml"]