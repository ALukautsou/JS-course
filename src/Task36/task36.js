//Task36
// node.js - Content negotiation again

//***Initializing modules
// http module to request data from a site
var http = require('http');

//Provided function
//Utility function reads a whole stream and calls a callback
//function with the result, using the usual pattern of passing
//any errors it encounters as the first argument to the callback
function readStreamAsString(stream, callback) {
 var data = '';
 stream.on('data', function(chunk) {
   data += chunk.toString();
 });
 stream.on('end', function() {
   callback(null, data);
 });
 stream.on('error', function(error) {
   callback(error);
 });
}

//***Initializing variables
// types - contains required response formats
var types = [
    'text/plain',
    'text/html',
    'application/json',
    'application/rainbows+unicorns'
];
// hst - contains site to use as data source
var hst = 'eloquentjavascript.net';
// pth - contains specific path on site to
// populate data from
var pth = '/author';

//***Content negotiation
types.forEach(function(type){
    http.request({
        hostname: hst,
        path: pth,
        headers: {Accept: type}
    }, function(response) {
        if (response.statusCode !== 200) {
// if not OK (statusCode = 200) then show error
            console.error('Request for' + type + ' failed. Reason: ' +
                    response.StatusMessage);
            return;
        }
        readStreamAsString(response, function(error, content) {
           if (error) {
               throw error;
           }
           process.stdout.write('Type ' + type + ': ' + content);
        });
    }).end();
});
