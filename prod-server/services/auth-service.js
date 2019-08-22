"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateJWT = generateJWT;
exports.requireLogin = requireLogin;
exports.decodeToken = decodeToken;
exports.getUserName = getUserName;
exports.getUserId = getUserId;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generateJWT(user) {
  const tokenData = {
    username: user.username,
    id: user._id
  };
  return _jsonwebtoken.default.sign({
    user: tokenData
  }, process.env.TOKEN_SECRET);
}

function requireLogin(req, res, next) {
  const token = decodeToken(req);
  if (!token) return res.status(401).json({
    message: "You must be logged in."
  });
  next();
}

function decodeToken(req) {
  const token = req.headers.authorization || req.headers["authorization"];
  if (!token) return null;

  try {
    return _jsonwebtoken.default.verify(token, process.env.TOKEN_SECRET);
  } catch (error) {
    return null;
  }
}

function getUserName(req) {
  const token = decodeToken(req);
  if (!token) return null;
  return token.user.username;
}

function getUserId(req) {
  const token = decodeToken(req);
  if (!token) return null;
  return token.user.id;
}