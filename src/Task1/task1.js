function forLoop(a){
    let str = "";
    for (var i = 1; i <=a; i++){
        var sharp = "#";
        var substr = sharp.repeat(i);
        substr += "/n";
        str += substr;
    }
    return str;
}