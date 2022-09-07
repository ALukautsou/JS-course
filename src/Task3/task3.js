function isEven(n) {
    if (n === 0) return true;
    else if (n === 1) return false;
    return n < 0 ? isEven(-n) : isEven(n-2);
}