(function main() {
    console.log("GET FILE LIST");
    fetch('/getAllFiles', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
    .then(response => response.json())
    .then(response => createSelectOptions(response));
})() 

// creates file selection elements in <select>
const select = document.getElementById("filelist");
const textarea = document.getElementById("filetext");

var filesCache;

function createSelectOptions(resp) {
    filesCache = resp.files;
    var files = resp.files;
    files.forEach(file => {
        var option = document.createElement("option");
        option.value = file.name;
        option.innerHTML = file.name;
        select.appendChild(option);
        select.value = file.name;
        textarea.value = file.data;
    });
}

const selectLoginHandler = e => {
    filesCache.forEach(file => {
        if (select.value === file.name) {
            textarea.value = file.data;
        }
    });
    console.log("SELECT")
}
select.addEventListener('change', selectLoginHandler)

// form handler
const form = document.getElementById("mainForm");
const formHandler = e => {
    fetch('/submitdata', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
            "filename": select.value,
            "data": textarea.value
        })
    })
    .then(response => response.json())
    .then(response => createSelectOptions(response))
}
form.addEventListener('submit', formHandler)