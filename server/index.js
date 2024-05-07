import express from "express";
import swaggerUi from "swagger-ui-express";
import DataRouter from "./routes/data.js";
import UserRouter from "./routes/user.js";
import fs from "fs"
const app = express();
const PORT = process.env.PORT || 3000;
const env = process.env.NODE_ENV || "development";

const swagger = JSON.parse(fs.readFileSync(`swagger.json`));
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swagger));

// adding routing
app.use("/user", UserRouter);
app.use("/", DataRouter);

// add static files
app.use(express.static("dist"));
app.get("/*", function (req, res) {
  res.sendFile("dist/index.html", { root: "." });
});

import { getVolcanoByIDAuthenticated } from "./database/volcano.js";
console.log(await getVolcanoByIDAuthenticated(69))

app.listen(PORT, () => console.log(`express is listening on port ${PORT}.`));
