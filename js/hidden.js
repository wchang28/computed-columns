"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __formulas__4ad69c81c4424d278ff43b0d010b2520 = {};
function defineComputedColumns(formulas) { __formulas__4ad69c81c4424d278ff43b0d010b2520 = formulas; }
function ISNUMBER(v) { return (typeof v === "number"); }
function ISLOGICAL(v) { return (typeof v === "boolean"); }
function ISTEXT(v) { return (typeof v === "string"); }
function ZERO_IF_NAN(v) { return (typeof v === "number" ? v : 0); }
function NA() { return undefined; }
function ISNA(v) { return (typeof v === "undefined"); }
function ISBLANK(v) { return (typeof v === "undefined" || v == null); }
function AND() {
    var logicals = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        logicals[_i] = arguments[_i];
    }
    for (var i in logicals) {
        if (!logicals[i]) {
            return false;
        }
    }
    return true;
}
function OR() {
    var logicals = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        logicals[_i] = arguments[_i];
    }
    for (var i in logicals) {
        if (logicals[i]) {
            return true;
        }
    }
    return false;
}
function NOT(expression) { return (!expression ? true : false); }
function ARRAY() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    return values;
}
function SUM() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i in values) {
        if (typeof values[i] === "number") {
            sum += values[i];
        }
    }
    return sum;
}
function AVERAGE() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    var sum = 0;
    var count = 0;
    for (var i in values) {
        if (typeof values[i] === "number") {
            sum += values[i];
            count++;
        }
    }
    return (count > 0 ? sum / count : null);
}
function MIN() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    return Math.min.apply(Math, values);
}
function MAX() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    return Math.max.apply(Math, values);
}
function IF(expression, valueIfTrue, valueIfFalse) { return (expression ? valueIfTrue : valueIfFalse); }
function NOW() { return new Date(); }
function TODAY() { return new Date(new Date().setHours(0, 0, 0, 0)); }
function DATE(year, month, day) { return new Date(year, month - 1, day); }
function YEAR(dt) { return (typeof dt.getMonth === 'function' ? dt.getFullYear() : (typeof dt === "number" ? new Date(dt).getFullYear() : null)); }
function MONTH(dt) { return (typeof dt.getMonth === 'function' ? dt.getMonth() + 1 : (typeof dt === "number" ? new Date(dt).getMonth() + 1 : null)); }
function DAY(dt) { return (typeof dt.getMonth === 'function' ? dt.getDate() : (typeof dt === "number" ? new Date(dt).getDate() : null)); }
function VLOOKUP(value, table, col_index, match) {
    if (match === void 0) { match = false; }
    if (!table && col_index < 1) {
        return undefined;
    }
    else {
        for (var i in table) {
            var row = table[i];
            if (row.length >= 1 && col_index <= row.length && row[0] == value)
                return row[col_index - 1];
        }
        return undefined;
    }
}
function __recalc__f94410efbc414b4898d0e3ada50818e7(inputColumns) {
    var __dependencies__397ded04c7d347ceb3f59418bff0b6c7 = {};
    var __columnValues__16965a9b9d504b30ae0298afa9c3ba90 = {};
    function __getDependenciesInFormula__cd4e032147e0400e90680274592a8819(formula) {
        var m = formula.match(/\$\{[a-zA-Z_$][a-zA-Z_$.0-9]*\}/g);
        var fieldsMap = {};
        if (m) {
            for (var i in m) {
                var s = m[i];
                var field = s.replace(/\$\{/g, "").replace(/\}/g, "");
                fieldsMap[field] = true;
            }
        }
        var ret = [];
        for (var field in fieldsMap)
            ret.push(field);
        return ret;
    }
    function __computeColumn__309e988cbc7246e78e08930d81d5dfec(computedColumn) {
        var dependencyColumns = __dependencies__397ded04c7d347ceb3f59418bff0b6c7[computedColumn];
        for (var _i = 0, dependencyColumns_1 = dependencyColumns; _i < dependencyColumns_1.length; _i++) {
            var column = dependencyColumns_1[_i];
            if (typeof __columnValues__16965a9b9d504b30ae0298afa9c3ba90[column] === "undefined") {
                var columnIsComputedColumn = (typeof __formulas__4ad69c81c4424d278ff43b0d010b2520[column] !== "undefined");
                if (columnIsComputedColumn) {
                    __computeColumn__309e988cbc7246e78e08930d81d5dfec(column);
                }
                else {
                    __columnValues__16965a9b9d504b30ae0298afa9c3ba90[column] = inputColumns[column];
                }
            }
        }
        // every column that computedColumn depends on is now computed
        var formula = __formulas__4ad69c81c4424d278ff43b0d010b2520[computedColumn];
        for (var _a = 0, dependencyColumns_2 = dependencyColumns; _a < dependencyColumns_2.length; _a++) {
            var column = dependencyColumns_2[_a];
            var search = "${" + column + "}";
            //console.log("search=" + search);
            var replacement = "(__columnValues__16965a9b9d504b30ae0298afa9c3ba90[\"" + column + "\"])";
            formula = formula.split(search).join(replacement);
        }
        var evalString = "__columnValues__16965a9b9d504b30ae0298afa9c3ba90[\"" + computedColumn + "\"] = " + formula + ";";
        //console.log(`evalString=${evalString}`);
        try {
            eval(evalString);
        }
        catch (e) {
            var formula_1 = __formulas__4ad69c81c4424d278ff43b0d010b2520[computedColumn];
            var errMsg = "error evaluating formula \"" + formula_1 + "\": error=\n" + (typeof e === "string" ? e : JSON.stringify(e, null, 2));
            throw errMsg;
        }
    }
    for (var computedColumn in __formulas__4ad69c81c4424d278ff43b0d010b2520) {
        var formula = __formulas__4ad69c81c4424d278ff43b0d010b2520[computedColumn];
        __dependencies__397ded04c7d347ceb3f59418bff0b6c7[computedColumn] = __getDependenciesInFormula__cd4e032147e0400e90680274592a8819(formula);
    }
    //console.log(JSON.stringify(__dependencies__397ded04c7d347ceb3f59418bff0b6c7, null, 2));	
    for (var computedColumn in __formulas__4ad69c81c4424d278ff43b0d010b2520) {
        if (typeof __columnValues__16965a9b9d504b30ae0298afa9c3ba90[computedColumn] === "undefined") {
            __computeColumn__309e988cbc7246e78e08930d81d5dfec(computedColumn);
        }
    }
    //console.log(JSON.stringify(__columnValues__16965a9b9d504b30ae0298afa9c3ba90, null, 2));
    var ret = {};
    for (var computedColumn in __formulas__4ad69c81c4424d278ff43b0d010b2520) {
        ret[computedColumn] = __columnValues__16965a9b9d504b30ae0298afa9c3ba90[computedColumn];
    }
    //console.log(JSON.stringify(ret, null, 2));
    return ret;
}
//# sourceMappingURL=hidden.js.map