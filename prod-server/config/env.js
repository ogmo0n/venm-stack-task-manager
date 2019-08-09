"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setEnvironment = setEnvironment;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setEnvironment(app) {
  process.env.NODE_ENV !== "production" ? setDevEnv(app) : setProdEnv(app);
}

function setDevEnv(app) {
  process.env.NODE_ENV = "development";
  process.env.DB_ENV = "mongodb://localhost:27017/venm-db-dev";
  app.use(_bodyParser.default.json());
  app.use((0, _morgan.default)("dev"));
  app.use((0, _cors.default)());
}

function setProdEnv(app) {
  process.env.DB_ENV = "mongodb://localhost:27017/venm-db-prod";
  app.use(_bodyParser.default.json());
  app.use(_express.default.static(__dirname + "/../dist"));
}