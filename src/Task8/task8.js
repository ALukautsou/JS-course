function deepEqual(a, b) {
  if (a === null || b === null) {return false;}

  if (typeof a === "object" && typeof b === "object") {
    let keysA = Object.keys(a), keysB = Object.keys(b);

    if (keysA.length !== keysB.length) {return false;}

    for (let key of keysA) {
      if (keysB.includes(key) && !deepEqual(a[key], b[key])) {return false;}
    }

    return true;
  } else {
    return a === b;
  }
}
console.log(deepEqual(10,10));