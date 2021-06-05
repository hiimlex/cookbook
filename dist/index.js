"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
require("reflect-metadata");
require("./database/connect");
require("dotenv/config");
var app = express_1.default();
app.use(express_1.default.json());
app.use(routes_1.default);
var server = app.listen(process.env.PORT || 4200, function () {
    return console.log("Server running at http://localhost:4200");
});
process.on("SIGTERM", shutDown);
process.on("SIGINT", shutDown);
function shutDown() {
    console.log("REceived kill signal, shutting down gracefully");
    server.close(function () {
        console.log("Closed out remaining connections");
        process.exit(0);
    });
    setTimeout(function () {
        console.error("Could not close connections in time, forcefully shutting down");
        process.exit(1);
    }, 10000);
}
