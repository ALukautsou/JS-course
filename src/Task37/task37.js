const express = require('express');
const path = require('path');
const router = express.Router();

const app = express();

app.use('/', express.static('public'));

app.use('/', router);
app.listen(process.env.port || 3000);