import {ColumnData, Formulas} from "./";

let __formulas__4ad69c81c4424d278ff43b0d010b2520: Formulas = {};
function defineComputedColumns(formulas: Formulas) {__formulas__4ad69c81c4424d278ff43b0d010b2520 = formulas;}
function ISNUMBER(v: any): boolean {return (typeof v === "number");}
function ISLOGICAL(v: any): boolean {return (typeof v === "boolean");}
function ISTEXT(v: any): boolean {return (typeof v === "string");}
function ZERO_IF_NAN(v: any): number { return (typeof v === "number" ? v : 0);}
function NA(): any {return undefined;}
function ISNA(v: any): boolean {return (typeof v === "undefined");}
function ISBLANK(v: any): boolean {return (typeof v === "undefined" || v == null);}
function AND(...logicals: boolean[]): boolean {
    for (let i in logicals) {
        if (!logicals[i]) {
            return false;
        }
    }
    return true;
}
function OR(...logicals: boolean[]): boolean {
    for (let i in logicals) {
        if (logicals[i]) {
            return true;
        }
    }
    return false;
}
function NOT(expression: boolean): boolean {return (!expression ? true : false);}
function ARRAY(...values: any[]): any[] {return values;}
function SUM(...values: number[]): number {
    let sum = 0;
    for (let i in values) {
        if (typeof values[i] === "number") {
            sum += values[i];
        }
    }
    return sum;
}
function AVERAGE(...values: number[]): number {
    let sum = 0;
    let count = 0;
    for (let i in values) {
        if (typeof values[i] === "number") {
            sum += values[i];
            count++;
        }
    }
    return (count> 0 ? sum/count : null);
}
function MIN(...values: number[]): number { return Math.min(...values); }
function MAX(...values: number[]): number { return Math.max(...values); }
function IF(expression: boolean, valueIfTrue: any, valueIfFalse: any): any { return (expression ? valueIfTrue : valueIfFalse); }
function NOW(): Date {return new Date();}
function TODAY(): Date {return new Date(new Date().setHours(0,0,0,0));}
function DATE(year: number, month: number, day?: number): Date {return new Date(year, month-1, day);}
function YEAR(dt: Date): number {return (typeof dt.getMonth === 'function' ? dt.getFullYear() : (typeof dt === "number" ? new Date(dt).getFullYear(): null));}
function MONTH(dt: Date): number {return (typeof dt.getMonth === 'function' ? dt.getMonth()+1 : (typeof dt === "number" ? new Date(dt).getMonth()+1: null));}
function DAY(dt: Date): number {return (typeof dt.getMonth === 'function' ? dt.getDate() : (typeof dt === "number" ? new Date(dt).getDate(): null));}
function VLOOKUP(value: any, table: any[][], col_index: number, match: boolean = false): any {
    if (!table && col_index < 1) {
        return undefined;
    } else {
        for (let i in table) {    // for each row
            let row = table[i];
            if (row.length >= 1 && col_index <= row.length && row[0] == value)
                return row[col_index-1];
        }
        return undefined;
    }
}
function __recalc__f94410efbc414b4898d0e3ada50818e7(inputColumns: ColumnData): ColumnData {
    let __dependencies__397ded04c7d347ceb3f59418bff0b6c7: {[computedColumn: string]: string[]} = {};
    let __columnValues__16965a9b9d504b30ae0298afa9c3ba90: ColumnData = {};
    function __getDependenciesInFormula__cd4e032147e0400e90680274592a8819(formula: string): string[] {
        let m = formula.match(/\$\{[a-zA-Z_$][a-zA-Z_$.0-9]*\}/g);
        let fieldsMap: {[field: string]: boolean} = {};
        if (m) {
            for (let i in m) {
                let s = m[i];
                let field = s.replace(/\$\{/g, "").replace(/\}/g, "");
                fieldsMap[field] = true;
            }
        }
        let ret: string[] = [];
        for (let field in fieldsMap)
            ret.push(field);
        return ret;
    }
    function __computeColumn__309e988cbc7246e78e08930d81d5dfec(computedColumn: string) {
        let dependencyColumns = __dependencies__397ded04c7d347ceb3f59418bff0b6c7[computedColumn];
        for (let column of dependencyColumns) {	// for each dependency column
            if (typeof __columnValues__16965a9b9d504b30ae0298afa9c3ba90[column] === "undefined") {	// column value has not yet been set
                let columnIsComputedColumn = (typeof __formulas__4ad69c81c4424d278ff43b0d010b2520[column] !== "undefined");
                if (columnIsComputedColumn) {
                    __computeColumn__309e988cbc7246e78e08930d81d5dfec(column);
                } else {	// column is not a computed column
                    __columnValues__16965a9b9d504b30ae0298afa9c3ba90[column] = inputColumns[column];
                }
            }
        }
        // every column that computedColumn depends on is now computed
        let formula = __formulas__4ad69c81c4424d278ff43b0d010b2520[computedColumn];
        for (let column of dependencyColumns) {
            let search = "${" + column + "}";
            //console.log("search=" + search);
            let replacement = "(__columnValues__16965a9b9d504b30ae0298afa9c3ba90[\"" + column + "\"])";
            formula = formula.split(search).join(replacement);
        }
        let evalString = "__columnValues__16965a9b9d504b30ae0298afa9c3ba90[\"" + computedColumn + "\"] = " + formula + ";";
        //console.log(`evalString=${evalString}`);
        try {
            eval(evalString);
        } catch(e) {
            let formula = __formulas__4ad69c81c4424d278ff43b0d010b2520[computedColumn];
            let errMsg = `error evaluating formula "${formula}": error=\n${typeof e === "string" ? e : JSON.stringify(e, null, 2)}`;
            throw errMsg;
        }
    }
    for (let computedColumn in __formulas__4ad69c81c4424d278ff43b0d010b2520) {
        let formula = __formulas__4ad69c81c4424d278ff43b0d010b2520[computedColumn];
        __dependencies__397ded04c7d347ceb3f59418bff0b6c7[computedColumn] = __getDependenciesInFormula__cd4e032147e0400e90680274592a8819(formula);
    }
    //console.log(JSON.stringify(__dependencies__397ded04c7d347ceb3f59418bff0b6c7, null, 2));	
    for (let computedColumn in __formulas__4ad69c81c4424d278ff43b0d010b2520) {	// for each computed column
        if (typeof __columnValues__16965a9b9d504b30ae0298afa9c3ba90[computedColumn] === "undefined") {	// column not yet computed
            __computeColumn__309e988cbc7246e78e08930d81d5dfec(computedColumn);
        }
    }
    //console.log(JSON.stringify(__columnValues__16965a9b9d504b30ae0298afa9c3ba90, null, 2));
    let ret: ColumnData = {};
    for (let computedColumn in __formulas__4ad69c81c4424d278ff43b0d010b2520) {	// for each computed column
        ret[computedColumn] = __columnValues__16965a9b9d504b30ae0298afa9c3ba90[computedColumn];
    }
    //console.log(JSON.stringify(ret, null, 2));
    return ret;
}