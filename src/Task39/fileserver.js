//Task38 - Task39
// Creating directories - A public space on a Web
//******TESTED USING NESTED FOLDER *FILES* AND INDEX.HTML FILE******

//Predefined functions and server set up
//*Initializing modules
var http = require('http'), fs = require('fs');

//*Initializing valiables
var methods = Object.create(null);

//*Starting a server on port 8000
http.createServer(function(request, response) {
    function respond(code, body, type) {
        if (!type) {
            type = 'text/plain';
        }
        response.writeHead(code, {'Content-Type': type});
        if (body && body.pipe) {
            body.pipe(response);
        } else {
            response.end(body);
        }
    }
    if (request.method in methods) {
        methods[request.method](urlToPath(request.url),
                respond, request);
    } else {
        respond(405, 'Method ' + request.method
                + ' not allowed.');
    }
}).listen(8000);

//*urlToPath() function uses Node’s built-in 'url' module
//to parse the URL. It takes its pathname, which will be
//something like /file.txt, decodes that to get rid of
//the %20-style escape codes, and prefixes a single dot
//to produce a path relative to the current directory.
function urlToPath(url) {
    var path = require('url').parse(url).pathname;
    return '.' + decodeURIComponent(path);
}

//*method GET described to populate data from a server
// responding to request, handling cases when whether file
// exists or it's a directory
methods.GET = function(path, respond) {
    fs.stat(path, function(error, stats) {
        if (error && error.code === 'ENOENT') {
            respond(404, 'File not found');
        } else if (error) {
            respond(500, error.toString());
        } else if (stats.isDirectory()) {
            fs.readdir(path, function(err, files) {
                if (err) {
                    respond(500, err.toString());
                } else {
                    respond(200, files.join('\n'));
                }
            });
        } else {
            respond(200, fs.createReadStream(path),
                    require('mime').lookup(path));
        }
    });
};

//*method DELETE described to delete data on a described path
// from a server responding to request
methods.DELETE = function(path, respond) {
    fs.stat(path, function(error, stats) {
        if (error && error.code === 'ENOENT') {
            respond(204);
        } else if (error) {
            respond(500, error.toString());
        } else if (stats.isDirectory()) {
            fs.rmdir(path, respondErrorOrNothing(respond));
        } else {
            fs.unlink(path, respondErrorOrNothing(respond));
        }
    });
};

//*function respondOnErrorOrNothing() handles cases when
// the file has already been deleted before (request’s
// objective is already fulfilled) according to idempotent
// principles
function respondErrorOrNothing(respond) {
    return function(error) {
        if (error) {
            respond(500, error.toString());
        } else {
            respond(204);
        }
    };
}

//*method PUT is described to populate data from a server (secure)
// responding to request, handling cases when whether file
// exists or it's a directory
methods.PUT = function(path, respond, request) {
    var outStream = fs.createWriteStream(path);
    outStream.on('error', function(error) {
        respond(500, error.toString());
    });
    outStream.on('finish', function() {
        respond(204);
    });
    request.pipe(outStream);
};

//method MKCOL is described to create a directory by calling
// fs.mkdir. When a directory exists at that path, returns a 204
// response so that directory creation requests are idempotent.
// If a nondirectory file exists here, return an error code 400.
methods.MKCOL = function(path, respond) {
    fs.stat(path, function(error, stats) {
        if (error && error.code === 'ENOENT') {
            fs.mkdir(path, respondErrorOrNothing(respond));
        } else if (error) {
            respond(500, error.toString());
        } else if (stats.isDirectory()) {
            respond(204);
        } else {
            respond(400, 'File exists');
        }
    });
};
