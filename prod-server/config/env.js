"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setEnvironment = setEnvironment;

require("core-js/modules/es6.regexp.to-string");

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setEnvironment(app) {
  !process.env.NODE_ENV || process.env.NODE_ENV.toString().trim() !== "production" ? setDevEnv(app) : setProdEnv(app);
}

function setDevEnv(app) {
  process.env.NODE_ENV = "development";
  app.use(_bodyParser.default.json());
  app.use((0, _morgan.default)("dev"));
  app.use((0, _cors.default)());
  process.env.DB_URL = "mongodb://localhost:27017/venm-db-dev";
  process.env.TOKEN_SECRET = "my-dev-token";
}

function setProdEnv(app) {
  process.env.NODE_ENV = "production";
  process.env.DB_URL = "mongodb://localhost:27017/venm-db-prod";
  process.env.TOKEN_SECRET = "my-prod-token";
  app.use(_bodyParser.default.json());
  app.use(_express.default.static(__dirname + "../../dist"));
}