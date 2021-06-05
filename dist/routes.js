"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var AuthController_1 = __importDefault(require("./app/controllers/AuthController"));
var UserController_1 = __importDefault(require("./app/controllers/UserController"));
var authMiddleware_1 = __importDefault(require("./app/middlewares/authMiddleware"));
var FavoriteController_1 = __importDefault(require("./app/controllers/FavoriteController"));
var router = express_1.Router();
router.post("/users", UserController_1.default.store);
router.get("/users", UserController_1.default.list);
router.get("/users/:id", UserController_1.default.index);
router.put("/users/:id", UserController_1.default.change);
router.delete("/users/:id", UserController_1.default.delete);
router.put("/users/:id/favorite", authMiddleware_1.default, FavoriteController_1.default.store);
router.get("/users/favorite/:id", authMiddleware_1.default, FavoriteController_1.default.index);
router.delete("/users/favorite/:id", authMiddleware_1.default, FavoriteController_1.default.delete);
router.post("/auth", AuthController_1.default.authenticate);
exports.default = router;
