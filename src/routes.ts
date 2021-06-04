import { Router } from "express";
import AuthController from "./app/controllers/AuthController";
import UserController from "./app/controllers/UserController";
import authMiddleware from "./app/middlewares/authMiddleware";
import FavoriteController from "./app/controllers/FavoriteController";

const router = Router();

router.post("/users", UserController.store);
router.get("/users", UserController.list);
router.get("/users/:id", UserController.index);
router.put("/users/:id", UserController.change);
router.delete("/users/:id", UserController.delete);

router.put("/users/:id/favorite", authMiddleware, FavoriteController.store);
router.get("/users/favorite/:id", authMiddleware, FavoriteController.index);

router.post("/auth", AuthController.authenticate);

export default router;
