//Task39
// A public space on a Web
//function request() is a template for creating requests to server.
// 1st argument is a list of options to build a request; 2nd argument
// is a callback function to use
function request(options, callback) {
    var req = new XMLHttpRequest();
    req.open(options.method || 'GET', options.pathname, true);
    req.addEventListener('load', function() {
        if (req.status < 400) {
            callback(null, req.responseText);
        } else {
            callback(new Error('Request failed: ' + req.statusText));
        }
    });
    req.addEventListener('error', function() {
        callback(new Error('Network error'));
    });
    req.send(options.body || null);
}

//Referring to the document elements
var filelist = document.querySelector('#filelist');
var textarea = document.querySelector('#file');

//Request loads the initial file list from the server.
// Errors are pushed to the console. Once folder file
// list is loaded - textarea is switched to display
// selected file.
request({pathname: './'}, function(error, files) {
    if (error) {
        throw error;
    }
    files.split('\n').forEach(function(file) {
        var option = document.createElement('option');
        option.textContent = file;
        filelist.appendChild(option);
    });
    loadCurrentFile();
});

//function loadCurrentFile() returns the content of the specified
// (selected) file to the textarea input field.
function loadCurrentFile() {
    request({pathname: filelist.value}, function(error, file) {
        if (error) {
            throw error;
        }
        textarea.value = file;
    });
}

//Event handler tracks File list selection change and loads
// selected field contents to the textarea input field.
filelist.addEventListener('change', loadCurrentFile);

//function saveFile is called by the SAVE button on the HTML document.
// Makes a request to save the currently selected file.
function saveFile() {
    request({pathname: filelist.value,
        method: 'PUT',
        body: textarea.value}, function(error) {
            if (error) {
                throw error;
            }
        });
}
