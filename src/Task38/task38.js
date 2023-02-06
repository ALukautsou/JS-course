methods.MKCOL = function(path, respond) {
    fs.stat(path, function(error, stats) {
        if (error && error.code === "ENOENT") {
            fs.mkdir(path,respondErrorOrNothing(respond));
        } else if (error) {
            respond(500, error.toString());
        } else if (stats.isDirectory()) {
            respond(204);
        }
    });
};

function respondErrorOrNothing(respond) {
    return function(error) {
        if (error) {
            respond(500, error.toString());
        } else {
            respond(204);
        }
    };
}