"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
defineComputedColumns({
    "sinOfAngle": "Math.sin(${angle})",
    "people": "makePeople(${name}.toUpperCase(), ${age})",
    "name": "fullName(${firstName}, ${lastName})",
    "fullPeople": "'Hi: ' + makeFullPeople(${people}, ${sex}.toLowerCase(), ${goodGuy})",
    "year": "2000 + 18",
    "angle": "30 + 15"
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
//# sourceMappingURL=config.js.map