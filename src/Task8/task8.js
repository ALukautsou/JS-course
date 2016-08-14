//Task8
//Deep comparison

//deepEqual() - takes two values and returns true only
// if they are the same value or are objects with the
// same properties whose values are also equal when
// compared with a recursive call to itself.
function deepEqual(x, y) {
    if (x === y) {
        return true;
    }
    if (x == null || y == null) {
        return false;
    }
    if (typeof x === 'object' && typeof y === 'object') {
        if (x.length !== y.length) {
            return false;
        }
        for (var prop in x) {
            if (!y.hasOwnProperty(prop) || !deepEqual(x[prop], y[prop])) {
                return false;
            }
        }
    return true;
    }
    return false;
}
