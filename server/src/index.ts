import express, {Express, Request, Response, NextFunction} from "express";
import https from "node:https";
import http from "node:http"
import fs from "node:fs";
import cors from "cors";
import swaggerUi from "swagger-ui-express"
import routes from "./routes";

const app: Express = express();
const portHttps: number = 3000;
const portHttp: number = 2080;

app.use(express.json());
// @ts-ignore
app.use(cors("*"));

routes(app)

app.use(
  "/",
  swaggerUi.serve,
  // @ts-ignore
  swaggerUi.setup(JSON.parse(fs.readFileSync(`swagger.json`)))
);

// app.all("*", (req: Request, res: Response)=>{
//     res.status(404).send("Not Found");
// })

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
