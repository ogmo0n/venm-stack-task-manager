import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";

export function setEnvironment(app) {
  !process.env.NODE_ENV ||
  process.env.NODE_ENV.toString().trim() !== "production"
    ? setDevEnv(app)
    : setProdEnv(app);
}

function setDevEnv(app) {
  process.env.NODE_ENV = "development";
  app.use(bodyParser.json());
  app.use(morgan("dev"));
  app.use(cors());
  process.env.DB_URL = "mongodb://localhost:27017/venm-db-dev";
  process.env.TOKEN_SECRET = "my-dev-token";
}

function setProdEnv(app) {
  process.env.NODE_ENV = "production";
  process.env.DB_URL = "mongodb://localhost:27017/venm-db-prod";
  process.env.TOKEN_SECRET = "my-prod-token";
  app.use(bodyParser.json());
  app.use(express.static(__dirname + "../../dist"));
}
