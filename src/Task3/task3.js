function isEven(N) {
    if (N == 0) return Boolean(true);
    else if (N == 1) return Boolean(false);
    else if (N < 0) return isEven(-N);
    else return isEven(N-2);
}