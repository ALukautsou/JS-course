//Task3
//IsEven
function isEven(x){
 // To fix function for usage with negative numbers
    var num = Math.abs(x);
    if (num === 1) {
        return false;
    } else if (num === 0) {
        return true;
    } else {
        return isEven(num - 2);
    }
}
