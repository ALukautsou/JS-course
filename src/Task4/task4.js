function countBs(str){
    var counter = 0;
    for (var i = 0; i < str.length; i++){
        if (str[i] == "B") 
        counter++;
    }
    return counter;
}

function countChar(str, sym){
    var counter = 0;
    for (var i = 0; i < str.length; i++){
        if(str[i] == sym)
        counter++;
    }
    return counter;
}