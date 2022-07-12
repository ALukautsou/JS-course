function arrayToList(arr) {
    var list = null;

    for (var i = arr.length - 1; i >= 0; i--) {
        list = {value: arr[i], rest: list};
    }

    return list;
}

function listToArray(list) {
    var arr = [];
    
    for (var node = list; node; node = node.rest) {
        arr.push(node.value);
    }

    return arr;
}

function prepend(key, list) {
    return {value: key, rest: list};
}

function nth(list, num) {
    return (!list) ? undefined :
    (num === 0) ? list.value : nth(list.rest, num - 1);
}