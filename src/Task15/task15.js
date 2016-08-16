//Task15
//Sequence Interface

//Constructor for arraySeq object
function arraySeq(arr){
    this.pos = -1;
    this.arr = arr;
}

//defining prototype for next method of
// arraySeq object
arraySeq.prototype.next = function(){
    if (this.pos >= this.arr.length - 1) {
        return false;
    }
    this.pos += 1;
    return true;
};

//defining prototype for curr method of
// arraySeq object
arraySeq.prototype.curr = function() {
    return this.arr[this.pos];
};

//constructor for rangeSeq object
function rangeSeq(from, to){
    this.pos = from - 1;
    this.to = to;
}

//defining prototype for next method of
// rangeSeq object
rangeSeq.prototype.next = function(){
    if (this.pos >= this.to) {
        return false;
    }
    this.pos += 1;
    return true;
};

//defining prototype for curr method of
// rangeSeq object
rangeSeq.prototype.curr = function(){
    return this.pos;
};

//function logFive returns first 5 elements from
// the sequence of elements got in an argument
function logFive(seq) {
    var res = '';
    for (var i = 0; i < 5;  i+= 1) {
        if (!seq.next()) {
            break;
        }
        res += seq.curr() + '\n';
    }
    return res;
}
