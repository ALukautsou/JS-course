function Vector(x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype.plus = function(another) {
    return new Vector(this.x + another.x, this.y + another.y);
}

Vector.prototype.minus = function(another) {
    return new Vector(this.x - another.x, this.y - another.y);
}

Object.defineProperty(Vector.prototype, "length", {
    get: function() {
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    }
});