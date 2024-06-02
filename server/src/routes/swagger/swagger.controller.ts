import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import fs from "node:fs";

export default function swagger(app: Express) {
    app.use(swaggerUi.serve)
    app.get("/",
        // @ts-ignore
        swaggerUi.setup(JSON.parse(fs.readFileSync('swagger.json', 'utf8')))
    );
}