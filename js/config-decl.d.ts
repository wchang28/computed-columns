declare global  {
    function defineComputedColumns(formulas: {
        [computedColumn: string]: string;
    }): void;
    function ZERO_IF_NAN(n: number): number;
    function SUM(...values: number[]): number;
    function AVERAGE(...values: number[]): number;
    function MIN(...values: number[]): number;
    function MAX(...values: number[]): number;
    function IF(expression: boolean, valueIfTrue: any, valueIfFalse: any): any;
}
export {  };
