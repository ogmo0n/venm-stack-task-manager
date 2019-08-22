"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var controller = _interopRequireWildcard(require("./tasks-controller"));

var auth = _interopRequireWildcard(require("../../services/auth-service"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.post("/task", auth.requireLogin, controller.create);
router.get("/task", auth.requireLogin, controller.index);
router.get("/task/:id", auth.requireLogin, controller.view);
router.put("/task", auth.requireLogin, controller.update);
router.delete("/task", auth.requireLogin, controller.trash);
var _default = router;
exports.default = _default;