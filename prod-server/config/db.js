"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dbConnect = dbConnect;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function dbConnect() {
  _mongoose.default.connect(process.env.DB_URL, {
    useNewUrlParser: true
  }, error => {
    if (error) {
      console.log("Unable to connect to database");
      throw error;
    } else {
      console.log("Connected to MongoDB");
    }
  });
}