function logFive(sequence) {
    var str = "";
    for (var i = 0; i < 5; i++) {
        if (!sequence.next()) {
           break;
        }
        str += sequence.current() + "\n";
    }
    return str;
}

function ArraySeq(array) {
    this.index  = -1;
    this.array = array;
}

ArraySeq.prototype.next = function() {
    if (this.index >= this.array.length-1) {
        return false;
    }
    this.index++;
    return true;
 }

ArraySeq.prototype.current = function() {
    return this.array[this.index];
}

function RangeSeq(from,to) {
    this.from = from - 1;
    this.to = to;
}

RangeSeq.prototype.next = function() {
    if (this.from >= this.to) {
        return false;  
    }
    this.from++;
    return true;
}

RangeSeq.prototype.current = function() {
    return this.from;
}