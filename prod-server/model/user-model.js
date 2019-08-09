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
userSchema.set("timestamps", true);
userSchema.virtual("fullName").get(() => {
  console.log("userSchema virtual arrow function");

  const first = _stringUtil.StringUtil.capitalize((void 0).first.toLowerCase());

  const last = _stringUtil.StringUtil.capitalize((void 0).last.toLowerCase());

  return "".concat(first, " ").concat(last);
});
userSchema.pre("save", next => {
  console.log("userSchema pre arrow function");
  (void 0).username = (void 0).username.toLowerCase();
  (void 0).first = (void 0).first.toLowerCase();
  (void 0).last = (void 0).last.toLowerCase();
  const unsafePassword = (void 0).password;
  (void 0).password = _bcrypt.default.hashSync(unsafePassword);
  next();
});

var _default = _mongoose.default.model("user", userSchema);

exports.default = _default;