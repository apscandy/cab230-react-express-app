import express from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import DataRouter from "./routes/data.js";
import UserRouter from "./routes/user.js";

const app = express();
const PORT = process.env.PORT || 3000;
const env = process.env.NODE_ENV || "development";

//setting up swagger doc
const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Andy's express app",
      version: "0.1.0",
      description: "I'm Just patiently waiting for assignment 3 to be released",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};
const specs = swaggerJsdoc(options);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

// adding routing
app.use("/user", UserRouter);
app.use("/", DataRouter);

// add static files
app.use(express.static("dist"));
app.get("/*", function (req, res) {
  res.sendFile("dist/index.html", { root: "." });
});

app.listen(PORT, () => console.log(`express is listening on port ${PORT}.`));
