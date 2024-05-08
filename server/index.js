import https from "https";
import http from "http";
import express from "express";

import swaggerUi from "swagger-ui-express";
import DataRouter from "./routes/data.js";
import UserRouter from "./routes/user.js";

import fs from "fs";
import { connectionPool } from "./database/database.js";

const PORT_HTTP = process.env.PORT_HTTP || 2080;
const PORT_HTTPS = process.env.PORT_HTTPS || 3000;
const APP_MODE = process.env.APP_MODE || "api";
const app = express();

// App mode is fullstack or api only
if (APP_MODE !== "api" && APP_MODE !== "fullstack") {
  throw new Error(
    "invalid environment variable for APP_MODE, please set api or fullstack"
  );
}

// adding routing
app.use("/user", UserRouter);
app.use("/", DataRouter);

// add static files
if (APP_MODE === "fullstack") {
  app.use(express.static("dist"));
  app.get("/*", function (req, res) {
    res.sendFile("dist/index.html", { root: "." });
  });
}else{
    const swagger = JSON.parse(fs.readFileSync(`swagger.json`));
    app.use("/", swaggerUi.serve, swaggerUi.setup(swagger));
}

// https://stackoverflow.com/questions/7907102/how-can-i-configure-expressjs-to-handle-both-http-and-https
http.createServer(app.handle.bind(app)).listen(PORT_HTTP);
https
  .createServer(
    {
      key: fs.readFileSync(`certificates/key.pem`),
      cert: fs.readFileSync(`certificates/cert.pem`),
    },
    app.handle.bind(app)
  )
  .listen(PORT_HTTPS);

async function shutdownServer() {
    await connectionPool.end()
    process.exit()
}
process.on('SIGINT', await shutdownServer);
process.on('SIGTERM',await shutdownServer);
process.on('SIGQUIT', await shutdownServer);