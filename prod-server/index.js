"use strict";

var _express = _interopRequireDefault(require("express"));

var _routes = require("./routes");

var _env = require("./config/env");

var _db = require("./config/db");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
const app = (0, _express.default)();
const port = 3000;
(0, _env.setEnvironment)(app);
(0, _db.dbConnect)();
(0, _routes.registerRoutes)(app);
app.get("/", (req, res) => {
  process.env.NODE_ENV !== "production" ? res.send("Running server in development mode") : res.sendFile("index.html", {
    root: __dirname + "/../dist/"
  });
});
app.listen(port, () => console.log("VENM app listening on port ".concat(port, " in ").concat(process.env.NODE_ENV, " mode!")));