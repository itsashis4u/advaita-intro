var express = require('express');
var app = express();
//var mongoose = require('mongoose');
var path = require('path');
//var bodyParser = require('body-parser')
//var multipart = require('connect-multiparty');
//var multipartMiddleware = multipart();

//var formPage = "/";  //Link of page which contains the form

// app.set('views', path.join(__dirname, '/'))

//app.use(express.static(path.join(__dirname, '/')));

//app.use(formPage, multipartMiddleware);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './', 'index.html'));
})
app.use("/css", express.static(__dirname + '/css'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/img", express.static(__dirname + '/img'));
app.use("/particlejs", express.static(__dirname + '/particleJs'));
app.use("/bootstrap", express.static(__dirname + '/bootstrap'));
//used for data communication using GET method
app.get('/sponsor', function(req, res) {
    res.sendFile(path.join(__dirname, './', 'sponsor.html'));
})

app.get('/team', function(req, res) {
    res.sendFile(path.join(__dirname, './', 'team_advaita.html'));
})

var port = process.argv[2] || 9000;

app.listen(port);

console.log("Listening at http://localhost:" + port);