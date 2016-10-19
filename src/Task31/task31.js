//Task31
//Content Negotiation

//function getSiteTypes() displays in console the response data of
// XMLHttpRequest in a specified type (using 1st argument as list of)
// required types) for a link got from a 2nd argument
function getSiteTypes(types, link){
//function getContentType() sends a XMLHttpRequest to populate data
// of specified type for specified link
    function getContentType(type, site) {
        var req = new XMLHttpRequest();
        req.open('GET', site, false);
        req.setRequestHeader('Accept', type);
        req.send(null);
        return req.responseText;
    }

    types.forEach(function(type){
        try {
            console.log(type + ':\n', getContentType(type, link), '\n');
        } catch(e) {
            console.log('Error: ' + e);
        }
    });
}
