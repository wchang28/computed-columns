declare global {
    function defineComputedColumns(formulas: {[computedColumn: string]: string}): void;
    function ISNUMBER(v: any): boolean;
    function ISLOGICAL(v: any): boolean;
    function ISTEXT(v: any): boolean;
    function ZERO_IF_NAN(v: any): number;
    function NA(): any;
    function ISNA(v: any): boolean;
    function AND(...logicals: boolean[]): boolean;
    function OR(...logicals: boolean[]): boolean;
    function NOT(expression: boolean): boolean;
    function SUM(...values: number[]): number;
    function AVERAGE(...values: number[]): number;
    function MIN(...values: number[]): number;
    function MAX(...values: number[]): number;
    function IF(expression: boolean, valueIfTrue: any, valueIfFalse: any): any;
    function NOW(): Date;
    function TODAY(): Date;
    function DATE(year: number, month: number, day?: number): Date;
    function YEAR(dt: Date): number;
    function MONTH(dt: Date): number;
    function DAY(dt: Date): number;
}

export {}
