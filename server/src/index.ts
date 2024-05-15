import express, { Express } from "express";
import https from "node:https";
import http from "node:http"
import fs from "node:fs";
import cors from "cors";
import routes from "./routes";

const app: Express = express();
const portHttps: number = 3000;
const portHttp: number = 2080;

app.use(express.json());
// @ts-ignore
app.use(cors("*"));

routes(app)

// @ts-ignore
http.createServer(app.handle.bind(app)).listen(portHttp);
https
    .createServer(
        {
            key: fs.readFileSync(`certificates/key.pem`),
            cert: fs.readFileSync(`certificates/cert.pem`),
        },
        // @ts-ignore
        app.handle.bind(app)
    )
    .listen(portHttps);
