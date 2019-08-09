import express from "express";
const router = express.Router();
import * as controller from "./tasks-controller";

router.post("/task", controller.create);
router.get("/task", controller.index);
router.get("/task/:id", controller.view);
router.put("/task", controller.update);
router.delete("/task", controller.trash);

export default router;
