//Task11
//Get Statistics

//initializing ancestry object
var ancestry = JSON.parse(ANCESTRY_FILE);

//average(array) computes the average value of the array
// got as argument
function average(array) {
    function plus(a, b) {
        return a + b;
    }
    return array.reduce(plus) / array.length;
};

//getStatistics() computes and outputs the average age of the people
// in the ancestry data set per century.
function getStatistic() {
    var arr = [], arrC = [], c;
    ancestry.forEach(function(person){
        var cent = century(person);
        if ( arrC.indexOf(cent) === -1) {
            arrC.push(cent);
        }
    });

    arrC.sort(function(a, b){
        return a - b;
    });

    arrC.forEach(function(cent){
        c = cent;
        arr.push(cent + ': ' + average(ancestry.filter(ofCent).map(age)));
    });

    function age(person){
        return person.died - person.born;
    };

    function century(person){
        return Math.ceil(person.died / 100);
    };

    function ofCent(person){
        return century(person) === c;
    };
    return arr;
}
