//Task24
//The cat's hat

//function animateCatHat() extends the cat animation
// defined earlier so that both the cat and his
// hat (<img src="img/hat.png">) orbit at opposite sides of the ellipse.
//No test cases in Test folder provided.
function animateCatHat(cat, hat){
    var angle;
    var lastTime;
    var center = {};

    angle = 0;
    lastTime = null;
    center.x = 500;
    center.y = 300;

    function animate(time) {
        if (lastTime != null) {
            angle += (time - lastTime) * 0.001;
        }

        lastTime = time;

        cat.style.top = center.y + (Math.sin(angle)*200) + 'px';
        cat.style.left = center.x + (Math.cos(angle)*200) + 'px';

        hat.style.top = center.y - (Math.sin(angle)*200) + 'px';
        hat.style.left = center.x - (Math.cos(angle)*200) + 'px';

        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
}
