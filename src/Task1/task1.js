function forLoop(a) {
    var str = "";
    for (var i = 1; i <= a; i++) {
        var substr = "#".repeat(i);
        substr += "/n";
        str += substr;
        }
    return str;
}