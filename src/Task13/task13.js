//Task13
// A vector type

//Constructor for vector type
function vector(x, y) {
    this.x = x;
    this.y = y;
};

//defining getter property length in vector type prototype
Object.defineProperty(vector.prototype, 'length', {
    get: function() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
});

//prototype for vector method plus
vector.prototype.plus = function(entry){
    return new vector(this.x + entry.x, this.y + entry.y);
};

//prototype for vector method minus
vector.prototype.minus = function(entry){
    return new vector(this.x - entry.x, this.y - entry.y);
};
