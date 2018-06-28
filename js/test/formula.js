"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    "testAND": 'AND(true, true)',
    "testAND2": 'AND(true, false, true)',
    "testOR": 'OR(false, false)',
    "testOR2": 'OR(false, false, true)',
    "today": 'TODAY()',
    "year": 'YEAR(${today})',
    "month": 'MONTH(${today})',
    "dayOfMonth": 'DAY(${today})',
    "dateTest": 'DATE(${year}, ${month}, ${dayOfMonth})',
    "naTest1": 'ISNA(NA())',
    "naTest2": 'ISNA(TODAY())',
    "notTest1": 'NOT(true)',
    "notTest2": 'NOT(false)',
    "notTest3": 'NOT(1)',
    "notTest4": 'NOT(2)',
    "notTest5": 'NOT(0)',
    "notTest6": 'NOT(TODAY())' // false
});
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
function makePeople(name, age) {
    return name + " @ " + age;
}
function makeFullPeople(people, sex, goodGuy) {
    return people + ", sex=" + sex + ", goodGuy=" + goodGuy;
}
//# sourceMappingURL=formula.js.map