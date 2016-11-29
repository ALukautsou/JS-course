// Provided function
// Utility function reads a whole stream and calls a callback
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
