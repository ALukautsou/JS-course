function deepEqual(a, b) {
  var keysA = Object.keys(a);
  var keysB = Object.keys(b);

  if (typeof a !== "object" || typeof b !== "object") {
    return a === b;
  }

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (var key of keysA) {
      if (keysA instanceof Object && keysB instanceof Object) {
        return keysB.includes(key) && deepEqual(a[key], b[key])
      }
  }
}