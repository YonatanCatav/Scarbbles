const express = require('express');
const app = express();
const path = require('path');
var port = 8080;
var fs = require('fs'),
    http = require('http');

app.use(express.static(path.join(__dirname, 'client/dist')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});
app.get('/main.js', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/dist', 'main.js'));
});


app.listen(port, () => console.log(`Listening on port ${port}`));
