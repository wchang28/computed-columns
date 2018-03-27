import * as decl from "../config-decl";

defineComputedColumns({
	"sinOfAngle": "Math.sin(${angle})",
	"people": "makePeople(${name}.toUpperCase(), ${age})",
	"name": "fullName(${firstName}, ${lastName})",
	"fullPeople": "'Hi: ' + makeFullPeople(${people}, ${sex}.toLowerCase(), ${goodGuy})",
	"year": "2000 + 18",
	"angle": "30 + 15"
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
