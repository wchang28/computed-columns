declare global {
    function defineComputedColumns(formulas: {[computedColumn: string]: string}): void;
    function ZERO_IF_NAN(n: number): number;
    function SUM(...values: number[]): number;
    function AVERAGE(...values: number[]): number;
}

export {}
