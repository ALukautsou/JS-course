function deepEqual(a, b) {
  if (a === null || b === null || !(a instanceof Object && b instanceof Object)) {
    return a === b;
  }

  var keysA = Object.keys(a);
  var keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (var key of keysA) {
        return keysB.includes(key) && deepEqual(a[key], b[key])
      }
}