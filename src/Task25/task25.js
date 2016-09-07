//Task25
//Cencored keyboard - no tests in Test folder

//function addFieldCensore uses its argument as a
// field to create a designed censore over the field
// using keydown event listener.
function addFieldCensore(fld){
    fld.addEventListener('keydown', function(event){
        if (String.fromCharCode(event.keyCode) === 'Q' ||
                String.fromCharCode(event.keyCode) === 'W' ||
                String.fromCharCode(event.keyCode) === 'X'){
            event.preventDefault();
        }
    });
}
