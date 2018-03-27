export declare type ColumnData = {
    [column: string]: any;
};
export declare type Formulas = {
    [computedColumn: string]: string;
};
export declare class ComputedColumns {
    private formulaScript;
    constructor(formulaScript: string);
    compute(inputColumns: ColumnData): ColumnData;
}
