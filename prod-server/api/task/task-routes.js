"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.post("/task", (req, res) => {
  res.send("post.task - create a task");
});
router.get("/task", (req, res) => {
  res.send("get.task - get all tasks");
});
router.get("/task/:id", (req, res) => {
  res.send("get.task - get task by id");
});
router.put("/task", (req, res) => {
  res.send("put.task - update a task");
});
router.delete("/task", (req, res) => {
  res.send("delete.task - delete a task");
});
var _default = router;
exports.default = _default;