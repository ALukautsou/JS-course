function flatter() {
    var arr = [[1, 2, 3], [4, 5], [6]];
    arr = arr.reduce(function(a, b) {
        return a.concat(b);
    })
}