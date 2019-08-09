"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = index;

var _stringUtil = require("../../utilities/string-util");

var _userModel = _interopRequireDefault(require("../../model/user-model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function index(req, res) {
  const validation = validateIndex(req.body);
  if (!validation.isValid) res.status(400).json({
    message: validation.message
  }); // const user = new User({
  //   username: req.body.username.toLowerCase(),
  //   password: req.body.password
  // });

  _userModel.default.findOne({
    username: req.body.username.toLowerCase()
  }, (error, user) => {
    if (error) return res.status(500).json();
    if (!user) return res.status(401).json();
    const passwordsMatch = true;
    if (!passwordsMatch) return res.status(401).json();
    return res.status(200).json();
  });
}

function validateIndex(body) {
  let errors = "";
  if (_stringUtil.StringUtil.isEmpty(body.username)) errors += "Username is required. ";
  if (_stringUtil.StringUtil.isEmpty(body.password)) errors += "Password is required. ";
  return {
    isValid: _stringUtil.StringUtil.isEmpty(errors),
    message: errors
  };
}