const ANCESTRY_FILE = require("../../ext/ancestry");

var ancestry = JSON.parse(ANCESTRY_FILE);

function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

var byName = {};

ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var difference = ancestry.filter(function(person) {
    return byName[person.mother] !== undefined && person.mother !== null;
}).map(function(person) {
    return person.born - byName[person.mother].born;
});