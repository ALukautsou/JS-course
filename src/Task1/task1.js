function forLoop(a) {
    var str;
    for (var i = "#"; i.length <= a; i+="#") {
        var substr = "\n";
        substr += i;
        str += substr;
        }
    return str;
}