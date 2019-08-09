import express from "express";
const router = express.Router();
import * as controller from "./user-controller";

// router.get("/user", (req, res) => {
//   res.send("get.user - get all users");
// });

router.get("/user", controller.index);

export default router;
