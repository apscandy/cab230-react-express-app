FROM docker.io/node:bookworm-slim AS frontend

WORKDIR /app

COPY client/package*.json ./

RUN npm install

COPY client/ .

RUN npm run build

FROM node:bookworm-slim AS backend

LABEL org.opencontainers.image.source=https://github.com/apscandy/cab230-react-express-app

ENV NODE_ENV production

WORKDIR /app

COPY server/package*.json ./

RUN npm install

COPY server/ .

COPY --from=frontend /app/dist /app/dist

EXPOSE 3000 

CMD ["node","index.js"]

