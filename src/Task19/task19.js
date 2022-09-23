function fixedText() {
    var text = "'I'm the cook,' he said, 'it's my job.'";
    return text.replace(/(^|\W)'|'($|\W)/g, '$1"$2');
}