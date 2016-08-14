//Task6
//Reverse Array
//reverseArray() takes an array as argument and produces
// a new array that has the same elements in the inverse order.
function reverseArray(array) {
    var arr = [];

    for (var i = 0; i < array.length; i++) {
        arr[i] =  array[array.length - 1 - i];
    }
    return arr;
}

//reverseArrayInPlace() modifies the array given as argument
// in order to reverse its elements.
function reverseArrayInPlace(array) {
    var tempArray = array.slice();

    for (var i = 0; i < array.length; i++) {
        array[i] =  tempArray[array.length - 1 - i];
    }
}
