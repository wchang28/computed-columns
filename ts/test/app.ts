import * as cc from "../";
import * as fs from "fs";
import * as path from "path";

let formulaScript = fs.readFileSync(path.resolve(__dirname, "./formula.js"), "utf8");

//console.log(formulaScript);

let inputColumns: cc.ColumnData = {
    firstName: "John",
	lastName: "Doe",
	age: 32,
	sex: "Male",
	goodGuy: true
};

let computedColumns = new cc.ComputedColumns(formulaScript).compute(inputColumns);
console.log(JSON.stringify(computedColumns, null, 2));
