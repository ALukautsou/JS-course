var http = require("http");

function readStreamAsString(stream, callback) {
	var data = "";
	stream.on("data", function(chunk) {
	  data += chunk.toString();
	});
	stream.on("end", function() {
	  callback(null, data);
	});
	stream.on("error", function(error) {
	  callback(error);
	});
}

var mediaTypes = ["text/plain", "text/html", "application/json"];

mediaTypes.forEach(function(type) {
	http.request({
		hostname: "eloquentjavascript.net",
		path: "/author",
		headers: {
			Accept: type
		}
	}, function(response) {
		readStreamAsString(response, function (error, content) {
            if (error) {
                throw error;
            }
            console.log("Type " + type + ": " + content);
		});
	}).end();
});