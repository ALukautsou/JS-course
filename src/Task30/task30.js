//Task30
//A bouncing ball

//function drawBox() creates a box on the canvas
// got as a parameter with a bouncing ball in
// this box that moves at a constant speed and
// bounces off the box’s sides when it hits them.
function drawBox(cx) {
//inializing starting parameters
    var lastTime = null;
    var x = 100, y = 300;
    var radius = 10;
    var speedX = 200, speedY = 90;

//function frame() draws out a canvas frame with a
// provided period
    function frame(time) {
        if (lastTime != null) {
            updateAnimation(Math.min(100, time - lastTime) / 1000);
        }
        lastTime = time;
        requestAnimationFrame(frame);

// function updateAnimation() updates each canvas frame
// with a described logic and draws out orange ball
// hitting yellow box's sides
        function updateAnimation(step) {
            cx.clearRect(0, 0, 400, 400);
            cx.strokeStyle = 'yellow';
            cx.lineWidth = 4;
            cx.strokeRect(25, 25, 350, 350);
//updating coordinates
            x += step * speedX;
            y += step * speedY;
//hitting left/right side of the box
            if (x < 25 + radius || x > 375 - radius) {
                speedX = -speedX;
            }
//hitting top/bottom side of the box
            if (y < 25 + radius || y > 375 - radius) {
                speedY = -speedY;
            }
//redrawing the box
            cx.fillStyle = 'orange';
            cx.beginPath();
            cx.arc(x, y, radius, 0, 7);
            cx.fill();
        }
    }
    requestAnimationFrame(frame);
}
