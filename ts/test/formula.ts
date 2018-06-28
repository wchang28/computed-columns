import * as decl from "../config-decl";

defineComputedColumns({
	"sinOfAngle": "Math.sin(${angle})",
	"people": "makePeople(${name}.toUpperCase(), ${age})",
	"name": "fullName(${firstName}, ${lastName})",
	"fullPeople": "'Hi: ' + makeFullPeople(${people}, ${sex}.toLowerCase(), ${goodGuy})",
	"angle": "30 + 15",
	"testSum": "SUM(7, 3, 5, 4, 7)",
	"testAvg": "AVERAGE(7, 3, 5, 4, 7)",
	"testMaxOf": "MAX(null, 2, 3)",
	"testMinOf": "MIN(2, 6, 7, 4)",
	"testIf": 'IF(${year}>2015, "new", "old")',
	"boyOrGirl": 'IF(${sex} === "Male", "It is a boy", "It is a girl")',
	"testNumeric": 'ISNUMBER(${number_doesnt_exist})',
	"testNumeric2": 'ISNUMBER(SUM(7, 3, 5, 4, 7))',
	"testIsLogical": 'ISLOGICAL(${boolean_doesnt_exist})',
	"testIsLogical2": 'ISLOGICAL(5 > 2)',
	"testIsText": 'ISTEXT(${string_doesnt_exist})',
	"testIsText2": 'ISTEXT(${people})',
	"testAND": 'AND(true, true)',	// true
	"testAND2": 'AND(true, false, true)',	// false
	"testOR": 'OR(false, false)',	// false
	"testOR2": 'OR(false, false, true)',	// true
	"today": 'TODAY()',
	"year": 'YEAR(${today})',
	"month": 'MONTH(${today})',
	"dayOfMonth": 'DAY(${today})',
	"dateTest": 'DATE(${year}, ${month}, ${dayOfMonth})',
	"naTest1": 'ISNA(NA())',	// true
	"naTest2": 'ISNA(TODAY())',	// false
	"notTest1": 'NOT(true)',	// false
	"notTest2": 'NOT(false)',	// true
	"notTest3": 'NOT(1)',	// false
	"notTest4": 'NOT(2)',	// false
	"notTest5": 'NOT(0)',	// true
	"notTest6": 'NOT(TODAY())'	// false
});

function fullName(firstName: string, lastName: string): string {
	return firstName + " " + lastName;
}

function makePeople(name: string, age: number): string {
	return `${name} @ ${age}`;
}

function makeFullPeople(people: string, sex: string, goodGuy: boolean): string {
	return `${people}, sex=${sex}, goodGuy=${goodGuy}`;
}
