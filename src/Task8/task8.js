function deepEqual(a, b) {
  if ((a instanceof Object && b === null) || (b instanceof Object && a === null)) {
      return false;
  }

  if (typeof a !== typeof b) {
      return false;
  }

  if (!(a instanceof Object)) {
      return a === b;
  }

  if (Object.keys(a).length !== Object.keys(b).length) {
      return false;
  }
  
  for (var key in a) {
      if (key in b && a[key] !== null && b[key] !== null) {
          return deepEqual(a[key], b[key]);
      }
  }
}