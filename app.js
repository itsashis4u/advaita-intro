var express = require('express');
var app = express();
//var mongoose = require('mongoose');
var path = require('path');
//var bodyParser = require('body-parser')
//var multipart = require('connect-multiparty');
//var multipartMiddleware = multipart();

//var formPage = "/";  //Link of page which contains the form

// app.set('views', path.join(__dirname, '/'))

app.use(express.static(path.join(__dirname, '/')));

//app.use(formPage, multipartMiddleware);

/*app.use("../public/css", express.static(__dirname + '/public/css'));
app.use("../public/js", express.static(__dirname + '/public/js'));
app.use("../public/img", express.static(__dirname + '/public/img'));
app.use("../public/js/particlejs", express.static(__dirname + '/public/js/particleJs'));
app.use("../bootstrap", express.static(__dirname + '/bootstrap'));*/

//used for data communication using GET method
// app.get('/', function(req, res) {
//     res.send("Hello World");
//     console.log("sent: index.html");
// })

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './views', 'events.html'));
    console.log("sent: events.html");
})

app.get('/sponsor', function(req, res) {
    res.sendFile(path.join(__dirname, './views', 'sponsor.html'));
    console.log("sent: sponsor.html");
})

app.get('/team', function(req, res) {
    res.sendFile(path.join(__dirname, './views', 'team_advaita.html'));
    console.log("sent: team_advaita.html");
})

app.get('/campamba', function(req, res) {
    res.sendFile(path.join(__dirname, './views', 'campamba.html'));
    console.log("sent: campamba.html");
})

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname, './views', 'about_advaita.html'));
    console.log("sent: about_advaita.html");
})

app.get('/hospitality', function(req, res) {
    res.sendFile(path.join(__dirname, './views', 'hospitality.html'));
    console.log("sent: hospitality.html");
})

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, './views', '404.html'));
    console.log("sent: 404.html");
})

var port = process.env.PORT || 8880;

app.listen(port);

console.log("Listening at http://localhost:" + port);