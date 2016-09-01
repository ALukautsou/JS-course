//Task23
//Elements By Tag Name

//function byTagName  - the version of getElementsByTagName method,
// a regular nonmethod function that takes a node and a string (the
// tag name) as arguments and returns an array containing all
// descendant element nodes with the given tag name.
function byTagName(node, tagName) {
    var res = [];
//recursive walk through the node DOM structure
    var rec = function(nod, tag) {
        if (nod.nodeType === document.TEXT_NODE || nod.tagName === undefined) {
            return;
        }
        if (nod.tagName.toUpperCase() === tag.toUpperCase()) {
            res.push(nod);
        }
        if (nod.childNodes) {
            for (var i=0; i<nod.childNodes.length; ++i) {
                rec(nod.childNodes[i], tag);
            }
        }
    };

    rec(node, tagName);
    return res;
};
