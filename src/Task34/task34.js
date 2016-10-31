//Task33
//Autocompletion

//function addAutoCompletion() extends a text field got as 1st argument
// so that when the user types, a list of suggested values based on array
// given as 3rd argument is shown below the field (in the DOM element got
// as 2nd argument).
function addAutoCompletion(fld, sugg, lst) {
    var txt = document.querySelector(fld);
    var sug = document.querySelector(sugg);
    txt.addEventListener('input', function() {
        var match = lst.filter(function(item) {
            return item.indexOf(txt.value) === 0;
        });
        sug.textContent = '';
        match.slice(0, 20).forEach(function(item) {
            var node = document.createElement('div');
            node.textContent = item;
            node.addEventListener('click', function() {
                txt.value = item;
                sug.textContent = '';
            });
            sug.appendChild(node);
        });
        if (txt.value === '') {
            sug.textContent = '';
        }
    });
}
