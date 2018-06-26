"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
defineComputedColumns({
    "sinOfAngle": "Math.sin(${angle})",
    "people": "makePeople(${name}.toUpperCase(), ${age})",
    "name": "fullName(${firstName}, ${lastName})",
    "fullPeople": "'Hi: ' + makeFullPeople(${people}, ${sex}.toLowerCase(), ${goodGuy})",
    "year": "2000 + 18",
    "angle": "30 + 15",
    "testSum": "SUM(7, 3, 5, 4, 7)",
    "testAvg": "AVERAGE(7, 3, 5, 4, 7)",
    "testMaxOf": "MAX(null, 2, 3)",
    "testMinOf": "MIN(2, 6, 7, 4)",
    "testIf": 'IF(${year}>2015, "new", "old")',
    "boyOrGirl": 'IF(${sex} === "Male", "It is a boy", "It is a girl")',
    "testNumberic": 'ISNUMBER(${number_doesnt_exist})'
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