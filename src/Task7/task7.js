function arrayToList(arr){
    var list = null;
    for (var i = arr.length - 1; i >= 0; i--){
        list = {
            value: arr[i], 
            rest: list
        };
    }
    return list;
}

function listToArray(node){
    var arr = [];
    for (var list = node; node; node = node.rest){
        arr.push(node.value);
    }
    return arr;
}

function prepend (value, list){
    var newList = {};
    for (var node = newList; node; node = node.rest) {
        newList = {
            value: value,
            rest: list
        };
    }
    return newList;
}

function nth(list, num){
    if (!list) return undefined;
    else if (num == 0) return list.value;
    else {
        num--;
        return nth(list.rest, num);
    }
}