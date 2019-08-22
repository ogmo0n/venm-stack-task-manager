"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _stringUtil = require("../utilities/string-util");

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userSchema = new _mongoose.default.Schema({
  username: String,
  first: String,
  last: String,
  password: String
});
userSchema.set("timestamps", true); // Returns a transient field client-side without actually adding it to the schema

userSchema.virtual("fullName").get(function () {
  const first = _stringUtil.StringUtil.capitalize(this.first.toLowerCase());

  const last = _stringUtil.StringUtil.capitalize(this.last.toLowerCase());

  return "".concat(first, " ").concat(last);
}); // Static methods that can be called from anywhere (e.g., User.passwordMatches)

userSchema.statics.passwordMatches = function (password, hash) {
  return _bcrypt.default.compareSync(password, hash);
}; // Runs validation before saving a user


userSchema.pre("save", function (next) {
  this.username = this.username.toLowerCase();
  this.first = this.first.toLowerCase();
  this.last = this.last.toLowerCase();
  const unsafePassword = this.password;
  this.password = _bcrypt.default.hashSync(unsafePassword);
  next();
});

var _default = _mongoose.default.model("user", userSchema);

exports.default = _default;