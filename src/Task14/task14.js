//Task14
//stretchCell

//function repeat() returns the value from 1st argument
// repeated the amount of times, got in 2nd argument
function repeat(string, times) {
    var result = '';
    for (var i = 0; i < times; i++) {
        result += string;
    }
    return result;
};

//constructor for textCell objects
function textCell(text) {
    this.text = text.split('\n');
};

//defining a prototype for minWidth for textCell
// object
textCell.prototype.minWidth = function() {
    return this.text.reduce(function(width, line) {
        return Math.max(width, line.length);
    }, 0);
};

//defining a prototype for minHeight for
// textCell object
textCell.prototype.minHeight = function() {
    return this.text.length;
};

//defining a prototype of draw function for
// textCell objects
textCell.prototype.draw = function(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
        var line = this.text[i] || '';
        result.push(line + repeat(' ', width - line.length));
    }
    return result;
};

//constructor for stretchCell objects
function stretchCell(inner, width, height) {
    this.inner = inner;
    this.width = width;
    this.height = height;
};

//redefining a prototype for minWidth for stretchCell
//object
stretchCell.prototype.minWidth = function() {
    var cur = this.inner.minWidth();
    if (cur > this.width) {
        return cur;
    } else {
        return this.width;
    }
};

//redefining a prototype for minHeight for
// stretchCell object
stretchCell.prototype.minHeight = function() {
    var cur = this.inner.minHeight();
    if (cur > this.height) {
        return cur;
    } else {
        return this.height;
    }
};

//redefining a prototype of draw function for
//textCell objects
stretchCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.inner.text[i] || '';
    result.push(line + repeat(' ', width - line.length));
  }
  return result;
};
