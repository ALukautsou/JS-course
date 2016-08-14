//Task7
//List to Array

//arrayToList() takes an array as an argument and builds up
// a list data structure
function arrayToList(array) {
    var list = {};

    list.value = array.shift();
    if (array.length > 0) {
        list.rest = arrayToList(array);
    } else {
        list.rest = null;
    }
    return list;
}

//listToArray() takes a list data structure and builds up an array
function listToArray(list) {
    var array = [];

    while (list !== null) {
        array[array.length] = list.value;
        list = list.rest;
    }
    return array;
}

//prepend() takes a valus as 1st argument, list data structure as 2nd argument,
// returns a new list data sctucture bult up on the basis of arguments
function prepend(value, list) {
    var lst = {};

    lst.value = value;
    lst.rest = list;
    return lst;
}

//nth() takes a list as 1st argument and a number as 2nd argument
// and returns the element at the given position in the list
function nth(list, n) {
    var val;

    if (list!== null) {
        if (n > 0) {
            val = nth(list.rest, n-1);
        } else {
            val = list.value;
        }
    } else {
        val = null;
    }
    return val;
}
