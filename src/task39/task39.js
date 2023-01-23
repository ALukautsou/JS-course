const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const fs = require('fs');
const router = express.Router();

const app = express();
const public = __dirname + "/public/";
const data = __dirname + "/data/";

var jsonParser = bodyParser.json()

// files
app.get('/', (_, res) => {
  res.sendFile(path.join(public, 'index.html'));
});
app.get('/js/main.js', (_, res) => {
    res.sendFile(path.join(public, 'js/main.js'));
});

// form handler
app.post('/submitdata', jsonParser, (req, res) => {
    console.log(req.body);

    fs.writeFileSync(data + req.body.filename, req.body.data);

    var json = {
        files: [],
    }
    fs.readdirSync(data).forEach(filename => {
        var objFile = {
            name: filename,
            data: fs.readFileSync(data + filename).toString()
        };
        json.files.push(objFile);
    });
    res.setHeader("Content-Type", "application/json").send(JSON.stringify(json, null, 2))
});

app.get('/getAllFiles', (_, res) => {

    var json = {
        files: [],
    }
    fs.readdirSync(data).forEach(filename => {
        var objFile = {
            name: filename,
            data: fs.readFileSync(data + filename).toString()
        };
        json.files.push(objFile);
    });
    res.setHeader("Content-Type", "application/json").send(JSON.stringify(json, null, 2))
});
 
app.use('/', router);
app.listen(process.env.port || 3000);