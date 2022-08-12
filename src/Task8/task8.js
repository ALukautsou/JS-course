function deepEqual(a, b) {
  if (a === null || b === null) {
    return a === b;
  }

  var aLikeNumber = new Number(a);
  var bLikeNumber = new Number(b);

  if (typeof a === "boolean" || typeof b === "boolean") {
    return a === b;
  }

  if (typeof a === "string" || typeof b === "string") {
    return a === b;
  }

  if ((!isNaN (aLikeNumber) && aLikeNumber instanceof Number) || (!isNaN (bLikeNumber) && bLikeNumber instanceof Number)) {
    return a === b;
  }

  if (!(a instanceof Object) || !(b instanceof Object)) {
    return false;
  }

  var keysA = Object.keys(a);
  var keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (var key of keysA) {
    return keysB.includes(key) && deepEqual(a[key], b[key]);
  }
}