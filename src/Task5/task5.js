function range(start, end, step = 1){
    var arr = [];
    for (var i = start; step < 0 ? i >= end : i <= end; i += step){
        arr.push(i);
    }
    return arr;
}

function sum(arr){
    var res = 0;
    for (var i = 0; i < arr.length; i++){
        res += arr[i];
    }
    return res;
}