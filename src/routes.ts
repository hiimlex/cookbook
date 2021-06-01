import { Router } from "express";

import authMiddleware from "./app/middlewares/authMiddleware";

import AuthController from "./app/controllers/AuthController";
import UserController from "./app/controllers/UserController";

const router = Router();

router.post("/users", UserController.store);
router.get("/users", UserController.list);
router.get("/users/:id", authMiddleware, UserController.index);
router.put("/users/:id", UserController.change);
router.delete("/users/:id", UserController.delete);

router.post("/auth", AuthController.authenticate);

export default router;
