"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cc = require("../");
var fs = require("fs");
var path = require("path");
var formulaScript = fs.readFileSync(path.resolve(__dirname, "./config.js"), "utf8");
//console.log(formulaScript);
var inputColumns = {
    firstName: "John",
    lastName: "Doe",
    age: 32,
    sex: "Male",
    goodGuy: true
};
var computedColumns = new cc.ComputedColumns(formulaScript).compute(inputColumns);
console.log(JSON.stringify(computedColumns, null, 2));
//# sourceMappingURL=app.js.map