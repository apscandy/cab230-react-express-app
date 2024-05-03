FROM docker.io/node:22-bullseye-slim AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM docker.io/nginx:latest

LABEL org.opencontainers.image.source=https://github.com/apscandy/cab230-react-express-app

LABEL maintainer="n11270179@qut.edu.au"

EXPOSE 80

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/dist /var/www/
