//Task33
//A java script workbench

//function addJSWB() creates a simple Java Script
// workbench. IT uses 1st argument to get script to execute,
// 2nd argument - button to create an even for, 3rd argument -
// DOM element to place a result into.
function addJSWB(code, button, output){
    document.querySelector(button).addEventListener('click', function() {
        var sc = document.querySelector(code).value;
        var ou = document.querySelector(output);
        try {
            var res = new Function(sc)();
            ou.innerText = String(res);
        } catch(e) {
            ou.innerText = 'Error: ' + e;
        }
    });
}
