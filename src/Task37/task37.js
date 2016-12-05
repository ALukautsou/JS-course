//Task37
// Fixing a leak

//Initializing an array for testing
var tests = [
    'http://myhostname:8000/../.config/config/google-chrome/Default/Web%20Data',
    'http://myhostname:8000/../.ssh/id_dsa',
    'http://myhostname:8000/../../../etc/passwd'
];

//Results of compare urlToPath() vs urlToPathF() execution
tests.forEach(function(url){
   console.log(urlToPath(url) + ' -> \n' + urlToPathF(url));
});

//urlToPath() function uses Node’s built-in 'url' module
// to parse the URL. It takes its pathname, which will be
// something like /file.txt, decodes that to get rid of
// the %20-style escape codes, and prefixes a single dot
// to produce a path relative to the current directory.
function urlToPath(url) {
    var path = require('url').parse(url).pathname;
    return '.' + decodeURIComponent(path);
}

//urlToPathF() is a fixed version of urlToPath() function.
// Includes relative path issue fix: '../' is not allowed,
// replaced with './'. Works both for forward and backslashes
// in a path.
function urlToPathF(url) {
    var path = require('url').parse(url).pathname;
    var decoded = decodeURIComponent(path);
    return '.' + decoded.replace(/\.\.(\/|\\|$)/g, './');
}
