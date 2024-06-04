import express, { Express } from "express";
import https from "node:https";
import http from "node:http"
import fs from "node:fs";
import cors from "cors";
import helmet from "helmet";
import routes from "./routes";

const app: Express = express();
const portHttps: number = 3000;
const portHttp: number = 3001;

app.use(express.json());
app.use(cors());
app.use(helmet());
routes(app)

// @ts-ignore
http.createServer(app.handle.bind(app)).listen(portHttp);
https.createServer(
    { 
        key: fs.readFileSync(`certificates/key.pem`), 
        cert: fs.readFileSync(`certificates/cert.pem`), 
    },
    // @ts-ignore
    app.handle.bind(app)
).listen(portHttps);
