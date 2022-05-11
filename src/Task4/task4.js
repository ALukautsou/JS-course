function countBs(str){
    return countChar(str, "B");
}

function countChar(str, sym){
    var counter = 0;
    for (var i = 0; i < str.length; i++){
        if(str[i] == sym)
        counter++;
    }
    return counter;
}