FROM docker.io/node:22-bullseye-slim AS frontend

WORKDIR /app

COPY client/package*.json ./

RUN npm install

COPY client/ .

RUN npm run build

FROM docker.io/node:22-bullseye-slim AS backend

LABEL org.opencontainers.image.source=https://github.com/apscandy/cab230-react-express-app

ENV NODE_ENV production

WORKDIR /app

COPY server/package*.json ./

# RUN openssl genrsa -out private.pem 4096 && openssl rsa -in private.pem -pubout -out public.pem

RUN npm install

COPY server/ .

COPY --from=frontend /app/dist /app/dist

EXPOSE 3000 

CMD ["node","index.js"]

