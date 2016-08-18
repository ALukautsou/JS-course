//Task19
//Quoting Style

// fixedText()  replaces all the dialogue quotes with
// double quotes, while keeping the single quotes used
// in contractions
function fixedText() {
    var text = '\'I\'m the cook,\' he said, \'it\'s my job.\'';
//change this call
    return text.replace(/(^)'|(\W)'|'(\W)|'($)/g, '$1$2"$3');
}
