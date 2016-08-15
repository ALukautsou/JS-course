//Task9
// Flatter arrays

//flatter(array) - 'flattens' an array of arrays
// into a single array that has all the elements
// of the input arrays.
function flatter(arrays) {
    return arrays.reduce(function(a, b){
        return a.concat(b);
    },[]);
}
