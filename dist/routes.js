"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var authMiddleware_1 = __importDefault(require("./app/middlewares/authMiddleware"));
var AuthController_1 = __importDefault(require("./app/controllers/AuthController"));
var UserController_1 = __importDefault(require("./app/controllers/UserController"));
var router = express_1.Router();
router.post("/users", UserController_1.default.store);
router.get("/users", UserController_1.default.list);
router.get("/users/:id", authMiddleware_1.default, UserController_1.default.index);
router.put("/users/:id", UserController_1.default.change);
router.delete("/users/:id", UserController_1.default.delete);
router.post("/auth", AuthController_1.default.authenticate);
exports.default = router;
