function logFive(sequence) {
    for(var i = 0; i < 5; i++){
        if(sequence.next()) {
           console.log(sequence.current());
        } else {
          return;
        }
    }
}
  
function ArraySeq(array) {
    this.index  = -1;
    this.array = array;
}

ArraySeq.prototype.next = function() {
    if(this.index >= this.array.length-1) {
        return false;
    }
    this.index++;
    return true;
 }

ArraySeq.prototype.current = function() {
    return this.array[this.index];
}

function RangeSeq(from,to) {
    this.from = from;
    this.to = to;
    this.index = -1;
}

RangeSeq.prototype.next = function() {
    if (this.from + this.index > this.to) {
        return false;  
    }
    this.index++;
    return true;
}

RangeSeq.prototype.current = function() {
    return this.from + this.index;
}