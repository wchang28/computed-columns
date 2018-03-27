"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __formulas__4ad69c81c4424d278ff43b0d010b2520 = {};
function defineComputedColumns(formulas) { __formulas__4ad69c81c4424d278ff43b0d010b2520 = formulas; }
function __execute__f94410efbc414b4898d0e3ada50818e7(inputColumns) {
    var __dependencies__ = {};
    var columnValues = {};
    function getDependenciesInFormula(formula) {
        var m = formula.match(/\$\{[a-zA-Z_$][a-zA-Z_$0-9]*\}/g);
        var fieldsMap = {};
        for (var i in m) {
            var s = m[i];
            var field = s.replace(/\$\{/g, "").replace(/\}/g, "");
            fieldsMap[field] = true;
        }
        var ret = [];
        for (var field in fieldsMap)
            ret.push(field);
        return ret;
    }
    function computeColumn(computedColumn) {
        var dependencyColumns = __dependencies__[computedColumn];
        for (var _i = 0, dependencyColumns_1 = dependencyColumns; _i < dependencyColumns_1.length; _i++) {
            var column = dependencyColumns_1[_i];
            if (typeof columnValues[column] === "undefined") {
                var columnIsComputedColumn = (typeof __formulas__4ad69c81c4424d278ff43b0d010b2520[column] !== "undefined");
                if (columnIsComputedColumn) {
                    computeColumn(column);
                }
                else {
                    columnValues[column] = inputColumns[column];
                }
            }
        }
        // every column that computedColumn depends on is now computed
        var formula = __formulas__4ad69c81c4424d278ff43b0d010b2520[computedColumn];
        for (var _a = 0, dependencyColumns_2 = dependencyColumns; _a < dependencyColumns_2.length; _a++) {
            var column = dependencyColumns_2[_a];
            var search = "${" + column + "}";
            //console.log("search=" + search);
            var replacement = "(columnValues[\"" + column + "\"])";
            formula = formula.split(search).join(replacement);
        }
        var evalString = "columnValues[\"" + computedColumn + "\"] = " + formula + ";";
        //console.log(`evalString=${evalString}`);
        eval(evalString);
    }
    for (var computedColumn in __formulas__4ad69c81c4424d278ff43b0d010b2520) {
        var formula = __formulas__4ad69c81c4424d278ff43b0d010b2520[computedColumn];
        __dependencies__[computedColumn] = getDependenciesInFormula(formula);
    }
    //console.log(JSON.stringify(__dependencies__, null, 2));	
    for (var computedColumn in __formulas__4ad69c81c4424d278ff43b0d010b2520) {
        if (typeof columnValues[computedColumn] === "undefined") {
            computeColumn(computedColumn);
        }
    }
    //console.log(JSON.stringify(columnValues, null, 2));
    var ret = {};
    for (var computedColumn in __formulas__4ad69c81c4424d278ff43b0d010b2520) {
        ret[computedColumn] = columnValues[computedColumn];
    }
    //console.log(JSON.stringify(ret, null, 2));
    return ret;
}
//# sourceMappingURL=hidden.js.map