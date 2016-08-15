//Task10
//Average age between mother and childrens

// This makes sure the data is exported in node.js —
// `require(./path/to/ancestry.js)` will get you the array.

//initializing ancestry object
var ancestry = JSON.parse(ANCESTRY_FILE);

//average(array) computes the average age difference
//between mothers and children (the age of
//the mother when the child is born).
function average(array) {
    function plus(a, b) {
        return a + b;
    }
    return array.reduce(plus) / array.length;
}

var byName = {};
//Creating map of ancestors using Names as keys
ancestry.forEach(function(person) {
    byName[person.name] = person;
});

var differences = [];

//Filling in differences array with differences of ages between
// mothers and childrens
ancestry.forEach(function(person){
    var mot = byName[person.mother];
    if (mot !== undefined) {
        differences.push(person.born - mot.born);
    }
});
