"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
try {
    typeorm_1.createConnection().then(function () { return console.log("Success connectedd"); });
}
catch (err) {
    throw new Error(err);
}
