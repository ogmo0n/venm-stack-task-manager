///* NODE */
// const http = require("http");
// const hostname = "127.0.0.1";
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World\n");
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

/* EXPRESS */
import express from "express";
import { registerRoutes } from "./routes";
import { setEnvironment } from "./config/env";
import { dbConnect } from "./config/db";

const app = express();
const port = 3000;

setEnvironment(app);
dbConnect();
registerRoutes(app);

app.get("/", (req, res) => {
  process.env.NODE_ENV !== "production"
    ? res.send("Running server in development mode")
    : res.sendFile("index.html", { root: __dirname + "/../dist/" });
});

app.listen(port, () =>
  console.log(
    `VENM app listening on port ${port} in ${process.env.NODE_ENV} mode!`
  )
);
