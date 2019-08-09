"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerRoutes = registerRoutes;

var _tasksRoutes = _interopRequireDefault(require("./api/task/tasks-routes"));

var _authRoutes = _interopRequireDefault(require("./api/auth/auth-routes"));

var _registerRoutes = _interopRequireDefault(require("./api/register/register-routes"));

var _userRoutes = _interopRequireDefault(require("./api/user/user-routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function registerRoutes(app) {
  app.use("/api", _tasksRoutes.default);
  app.use("/api", _authRoutes.default);
  app.use("/api", _registerRoutes.default);
  app.use("/api", _userRoutes.default);
}