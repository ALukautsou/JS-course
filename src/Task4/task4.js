//Task4
//BeanCounting
//countBs() takes a string as its only argument and returns a number
// that indicates how many uppercase 'B' characters are in the string.
function countBs(s){
    return countChar(s, 'B');
}
//countChar() takes a string as its 1st argument, and takes a 2nd
// argument that indicates the character that is to be counted.
function countChar(s, c){
    var n = 0;
    for (var i = 0; i < s.length; i++) {
        if (s.charAt(i) === c) {
            n++;
        }
    }
    return n;
}
