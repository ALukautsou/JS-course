//Task35
//Conway's Game of Life

//function gameOfLife() simple simulation that creates
// artificial “life” on a grid, each cell of which is
// either live or not. 1st argument used to get a grid
// of elements to process, 2nd argument is a trigger to
// turn to next cell generation.
function gameOfLife(grid, next, width, height, checkboxes){
    drawGrid();
    checkBoxesFromGrid(gridFromRandom());
    next.addEventListener('click', function() {
        checkBoxesFromGrid(nGen(gridFromCheckBoxes()));
    });

//function gridFromCheckBoxes() populates values from
// the existing checkboxes array into display grid.
    function gridFromCheckBoxes() {
        return checkboxes.map(function(box) {
            return box.checked;
        });
    }

//function checkBoxesFromGrid() populates values from
// the existing display grid(1st argument) into array
// for processing.
    function checkBoxesFromGrid(g) {
        return g.forEach(function(value, i) {
            checkboxes[i].checked = value;
        });
    }

//function gridFromRandom() populates random values
// into display grid.
    function gridFromRandom() {
        var res = [];
        for (var i = 0; i < width * height; i++) {
            res.push(Math.random() < 0.5);
        }
        return res;
    }

//function drawGrid() creates a grid of checkbox
// input fields to display Gme Of Life imitation.
    function drawGrid() {
        for(var i = 0; i < height; i++) {
            for (var y = 0; y < width; y++) {
                var box = document.createElement('input');
                box.type = 'checkbox';
                grid.appendChild(box);
                checkboxes.push(box);
            }
            grid.appendChild(document.createElement('br'));
        }
    }

//function countN() counts a number of
// living neighbour cells for a cell from
// the existing grid(1st argument) located
// at position [2nd argument, 3rd argument].
    function countN(g, i, y) {
        var count = 0;
        for(var y1 = Math.max(0, y - 1);
            y1 <= Math.min(height - 1, y + 1 ); y1++) {
            for(var i1 = Math.max(0, i - 1);
                i1 <= Math.min(width - 1, i + 1 ); i1++) {
                if ((y1 !== y || i1 !== i) && g[i1 + y1 * width]) {
                    count += 1;
                }
            }
        }
        return count;
    }

//function nGen() calculates a new turn of Generation for
//existing grid(1st argument).
    function nGen(g) {
        var nex = [checkboxes];
        for (var i = 0; i < height; i++) {
            for (var y = 0; y < width; y++) {
                var n = countN(g, i, y);
                var off = i + y * width;
                if (n < 2 || n > 3) {
                    nex[off] = false;
                } else if (n === 2) {
                    nex[off] = g[off];
                } else {
                    nex[off] = true;
                }
            }
        }
        return nex;
    }
}
