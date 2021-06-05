"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var User_1 = __importDefault(require("../models/User"));
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.store = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, _a, email, password, userExists, user, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        repository = typeorm_1.getRepository(User_1.default);
                        _a = req.body, email = _a.email, password = _a.password;
                        return [4 /*yield*/, repository.findOne({ where: { email: email } })];
                    case 1:
                        userExists = _b.sent();
                        if (userExists) {
                            return [2 /*return*/, res.sendStatus(409)];
                        }
                        user = repository.create({ email: email, password: password });
                        return [4 /*yield*/, repository.save(user)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, res.status(200).json(user)];
                    case 3:
                        err_1 = _b.sent();
                        throw new Error(err_1);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.list = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, allUsers, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        repository = typeorm_1.getRepository(User_1.default);
                        return [4 /*yield*/, repository.find()];
                    case 1:
                        allUsers = _a.sent();
                        if (!allUsers) {
                            return [2 /*return*/, res.status(204).json({})];
                        }
                        return [2 /*return*/, res.status(200).json({ users: allUsers })];
                    case 2:
                        err_2 = _a.sent();
                        throw new Error(err_2);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.index = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, id, user, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        repository = typeorm_1.getRepository(User_1.default);
                        id = req.params.id;
                        return [4 /*yield*/, repository.findOne(id)];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            return [2 /*return*/, res.sendStatus(404)];
                        }
                        return [2 /*return*/, res.status(200).json({ user: user })];
                    case 2:
                        err_3 = _a.sent();
                        throw new Error(err_3);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, id, user, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        repository = typeorm_1.getRepository(User_1.default);
                        id = req.params.id;
                        return [4 /*yield*/, repository.findOne(id)];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            return [2 /*return*/, res.sendStatus(404)];
                        }
                        return [4 /*yield*/, repository.delete(user)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, res.sendStatus(200)];
                    case 3:
                        err_4 = _a.sent();
                        throw new Error(err_4);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.change = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, id, user, password, results, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        repository = typeorm_1.getRepository(User_1.default);
                        id = req.params.id;
                        return [4 /*yield*/, repository.findOne(id)];
                    case 1:
                        user = _a.sent();
                        password = req.body.password;
                        if (!user) {
                            return [2 /*return*/, res.sendStatus(404)];
                        }
                        if (bcryptjs_1.default.compareSync(password, user.password)) {
                            return [2 /*return*/, res.sendStatus(409)];
                        }
                        repository.merge(user, { password: password });
                        return [4 /*yield*/, repository.save(user)];
                    case 2:
                        results = _a.sent();
                        return [2 /*return*/, res.status(200).json(results)];
                    case 3:
                        err_5 = _a.sent();
                        throw new Error(err_5);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return UserController;
}());
exports.default = new UserController();
