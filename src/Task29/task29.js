//Task29
//The pie chart - no tests in Test folder

//function drawPieChart - draws a Pie Chart according
// to provided data array (with putting a name description)
// along with the according 'pie slice'. 1st parameter -
// data array, 2nd parameter - canvas to draw the chart on.
function drawPieChart(res, cx) {
    var total = res.reduce(function(sum, choice) {
        return sum + choice.count;
    }, 0);

//starting Angle
    var currentAngle = -0.5 * Math.PI;
//chart center coordinates
    var centerX = 300, centerY = 150;

    res.forEach(function(r) {
        var sliceAngle = (r.count / total) * 2 * Math.PI;

        cx.beginPath();
//drawing a pie slice for current array element
        cx.arc(centerX, centerY, 100, currentAngle, currentAngle + sliceAngle);
//calculating 'name' text position
        var middleAngle = sliceAngle * 0.5 + currentAngle,
            textX = Math.cos(middleAngle) * 125 + centerX,
            textY = Math.sin(middleAngle) * 125 + centerY;

        cx.textBaseLine = 'middle';
//positioning text value according to angle
        if (Math.cos(middleAngle) > 0) {
            cx.textAlign = 'left';
        } else {
            cx.textAlign = 'right';
        }

        if (Math.abs(Math.sin(middleAngle)) > 0.86) {
            cx.textAlign = 'center';
        }

        cx.font = '15px arial-black';
        cx.fillStyle = 'black';
        cx.fillText(r.name, textX, textY);

        currentAngle += sliceAngle;
        cx.lineTo(centerX, centerY);
        cx.fillStyle = r.color;
        cx.fill();
    });
}
