//Task12
//Every and then Some

//fuction every() returns true only when the
// predicate returns true for ALL elements of the array.
function every(array, predicate) {
    var i = 0;
    while ( i < array.length ) {
        if (!predicate(array[i])) {
            return false;
        }
        i++;
    }
    return true;
}

//function some() returns true only when the
//predicate returns true for ANY of elements in the array.
function some(array, predicate) {
    var i = 0;
    while ( i < array.length ) {
        if (predicate(array[i])) {
            return true;
        }
        i++;
    }
    return false;
}
