const express = require('express');
const path = require('path');
const router = express.Router();

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/task39.html'));
});

app.get('/task39.js', (req, res) => {
  res.sendFile(path.join(__dirname + '/task39.js'));
});


console.log(__dirname)
app.use('/', router);
app.listen(process.env.port || 3000);