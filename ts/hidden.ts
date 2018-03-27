import {ColumnData, Formulas} from "./";

let __formulas__4ad69c81c4424d278ff43b0d010b2520: Formulas = {};
function defineComputedColumns(formulas: Formulas) {__formulas__4ad69c81c4424d278ff43b0d010b2520 = formulas;}
function __execute__f94410efbc414b4898d0e3ada50818e7(inputColumns: ColumnData): ColumnData {
    let __dependencies__: {[computedColumn: string]: string[]} = {};
    let columnValues: ColumnData = {};
    function getDependenciesInFormula(formula: string): string[] {
        let m = formula.match(/\$\{[a-zA-Z_$][a-zA-Z_$0-9]*\}/g);
        let fieldsMap: {[field: string]: boolean} = {};
        for (let i in m) {
            let s = m[i];
            let field = s.replace(/\$\{/g, "").replace(/\}/g, "");
            fieldsMap[field] = true;
        }
        let ret: string[] = [];
        for (let field in fieldsMap)
            ret.push(field);
        return ret;
    }
    function computeColumn(computedColumn: string) {
        let dependencyColumns = __dependencies__[computedColumn];
        for (let column of dependencyColumns) {	// for each dependency column
            if (typeof columnValues[column] === "undefined") {	// column value has not yet been set
                let columnIsComputedColumn = (typeof __formulas__4ad69c81c4424d278ff43b0d010b2520[column] !== "undefined");
                if (columnIsComputedColumn) {
                    computeColumn(column);
                } else {	// column is not a computed column
                    columnValues[column] = inputColumns[column];
                }
            }
        }
        // every column that computedColumn depends on is now computed
        let formula = __formulas__4ad69c81c4424d278ff43b0d010b2520[computedColumn];
        for (let column of dependencyColumns) {
            let search = "${" + column + "}";
            //console.log("search=" + search);
            let replacement = "(columnValues[\"" + column + "\"])";
            formula = formula.split(search).join(replacement);
        }
        let evalString = "columnValues[\"" + computedColumn + "\"] = " + formula + ";";
        //console.log(`evalString=${evalString}`);
        eval(evalString);
    }
    for (let computedColumn in __formulas__4ad69c81c4424d278ff43b0d010b2520) {
        let formula = __formulas__4ad69c81c4424d278ff43b0d010b2520[computedColumn];
        __dependencies__[computedColumn] = getDependenciesInFormula(formula);
    }
    //console.log(JSON.stringify(__dependencies__, null, 2));	
    for (let computedColumn in __formulas__4ad69c81c4424d278ff43b0d010b2520) {	// for each computed column
        if (typeof columnValues[computedColumn] === "undefined") {	// column not yet computed
            computeColumn(computedColumn);
        }
    }
    //console.log(JSON.stringify(columnValues, null, 2));
    let ret:ColumnData = {};
    for (let computedColumn in __formulas__4ad69c81c4424d278ff43b0d010b2520) {	// for each computed column
        ret[computedColumn] = columnValues[computedColumn];
    }
    //console.log(JSON.stringify(ret, null, 2));
    return ret;
}