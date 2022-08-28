function every(arr = [], pred){
  for(var i = 0; i < arr.length; i++) {
    if (!pred(arr[i])) {
      return false;
    }
  }
  return true;
}

function some(arr = [], pred) {
  for(var i = 0; i < arr.length; i++) {
    if (pred(arr[i])) {
      return true;
    }
  }
  return false;
}