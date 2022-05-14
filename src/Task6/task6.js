function reverseArray(arr){
    var newArr = [];
    for (var i = arr.length-1; i >= 0; i--){
        newArr.push(arr[i]);
    }
    return newArr;
}

function reverseArrayInPlace(arr){
    var count = arr.length-1;  
    for (var i = 0; i <= count/2; i++){
        var sqr = arr[count-i];
        arr[count-i] = arr[i];
        arr[i] = sqr;
    }
    return arr;
}