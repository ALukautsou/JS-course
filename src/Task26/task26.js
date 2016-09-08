//Task26
//Mouse Trail - no tests in Test folder

//function addMouseTrail gets the list of dots from its
// argument and transforms it into mouse trail.
function addMouseTrail(dts){
    var currentDot = 0;
    addEventListener('mousemove', function(event){
        var dot = dts[currentDot];
        dot.style.left = (event.pageX - 3) + 'px';
        dot.style.top = (event.pageY - 3) + 'px';
        currentDot = (currentDot + 1) % dts.length;
    });
}
