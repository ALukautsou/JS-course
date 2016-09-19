//Task28
//Shapes - no tests in Test folder

//function trapezoid() is used to draw trapeziod
// figure on canvas. Uses its arguments to identify
// start pozition.
function trapezoid(x, y){
    cx.beginPath();
    cx.moveTo(x, y);
    cx.lineTo(x + 50, y);
    cx.lineTo(x + 80, y + 50);
    cx.lineTo(x - 30, y + 50);
    cx.closePath();
    cx.stroke();
}

//function redDiamond() is used to draw a rectangle
// figure rotated 45 degrees on canvas. Uses its
// arguments to identify start position.
function redDiamond(x, y){
    cx.translate(x + 30, y + 50);
    cx.rotate(Math.PI / 4);
    cx.fillStyle = 'red';
    cx.fillRect(-50, -50, 50, 50);
    cx.resetTransform();
}

//function zigzag() is used to draw zigzagged line
// on a canvas. Uses its arguments to identify
// start position.
function zigzag(x, y){
    cx.beginPath();
    cx.moveTo(x, y);
    for(var i = 0; i < 8; i++){
        cx.lineTo(x + 80, y + 8 * i + 4);
        cx.lineTo(x, y + 8 * i + 8);
    }
    cx.stroke();
}

//function spiral() is used to draw a spiral
// figure on canvas. Uses populated arguments
// to set start position.
function spiral(x, y){
    var r = 40, xc = x + r, yc = y + r;
    cx.beginPath();
    moveTo(xc, yc);
    for(var i = 0; i < 100; i++){
        var a = i * Math.PI / 10, d = r * i / 100;
        cx.lineTo(xc + Math.cos(a) * d,  yc + Math.sin(a) * d);
    }
    cx.stroke();
}

//function yellowStart() is used to draw a star
// figure on canvas. Used populated arguments
// ser start position.
function yellowStar(x, y){
    var r = 40, xc = x + r, yc = y + r;
    cx.beginPath();
    cx.moveTo(xc + r, yc);
    for(var i= 0; i <= 8; i++){
        var a = i * Math.PI / 4;
        cx.quadraticCurveTo(xc, yc, xc + Math.cos(a) * r, yc + Math.sin(a) * r);
    }
    cx.fillStyle = 'yellow';
    cx.fill();
    cx.strokeStyle = 'yellow';
    cx.stroke();
}
