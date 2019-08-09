"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = index;
exports.create = create;
exports.update = update;
exports.trash = trash;
exports.view = view;

require("core-js/modules/es6.regexp.to-string");

var _userModel = _interopRequireDefault(require("../../model/user-model"));

var _taskModel = _interopRequireDefault(require("../../model/task-model"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function index(req, res) {
  // find all tasks
  _taskModel.default.find({}, (error, tasks) => {
    if (error) return res.status(500).json();
    return res.status(200).json({
      tasks: tasks
    });
  }).populate("author", "username", "user");
}

function create(req, res) {
  // create tasks
  const id = 10;

  _userModel.default.findOne({
    _id: id
  }, (error, user) => {
    if (error || !user) return res.status(500).json();
    const task = new _taskModel.default(req.body.task);
    task.author = user._id;
    task.dueDate = (0, _moment.default)(task.dueDate);
    task.save(error => {
      if (error) return res.status(500).json();
      return res.status(200).json();
    });
  });

  return res.status(201).json();
}

function update(req, res) {
  // update tasks
  const id = 32;

  _userModel.default.findOne({
    _id: id
  }, (error, user) => {
    if (error) return res.status(500).json();
    if (!user) return res.status(404).json();
    const task = req.body.task;
    task.author = user._id;
    task.dueDate = (0, _moment.default)(task.dueDate);

    _taskModel.default.findByIdAndUpdate({
      _id: task._id
    }, task, error => {
      if (error) return res.status(500).json();
      return res.status(204).json();
    });
  });
}

function trash(req, res) {
  // delete tasks
  const id = 3;

  _taskModel.default.findOne({
    _id: req.params.id
  }, (error, task) => {
    if (error) return res.status(500).json();
    if (!task) return res.status(404).json();

    if (task.author._id.toString() !== id) {
      return res.status(403).json({
        message: "Not allowed to delte another user's post"
      });
    }

    _taskModel.default.deleteOne({
      _id: req.params.id
    }, error => {
      if (error) return res.status(500).json();
      return res.status(204).json();
    });
  });
}

function view(req, res) {
  // get task by id
  _taskModel.default.findOne({
    _id: req.params.id
  }, (error, task) => {
    if (error) return res.status(500).json();
    if (!task) return res.status(404).json();
    return res.status(200).json({
      task: task
    });
  });
}