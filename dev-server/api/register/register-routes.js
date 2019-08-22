import express from "express";
import * as controller from "./register-controller";

const router = express.Router();

router.post("/register", controller.index);

export default router;
