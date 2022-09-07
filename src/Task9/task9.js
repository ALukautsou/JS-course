function flatter(arr = [[1, 2, 3], [4, 5], [6]]) {
    return arr.reduce(function(a, b) {
        return a.concat(b);
    }, []);
}