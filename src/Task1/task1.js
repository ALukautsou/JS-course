function forLoop(a) {
    var str = "";
    for (var i = "#"; i.length <= a; i+="#") {
        str += (i + (i.length == a ? "" : "\n"));
    }
    return str;
}