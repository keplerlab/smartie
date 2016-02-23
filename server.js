var express = require('express')
var app = express()

var currentPath = "main";

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.use('/', express.static(__dirname + '/public'));

app.get('/client', function(req,res) {
  res.sendFile(__dirname + '/public/client.html');
});
app.get('/slave', function(req,res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/getstate', function(req,res) {
  res.end(currentPath);
});

app.get('/setstate/:path', function(req,res) {
    console.log("Path set to :", req.param("path"));
    currentPath = "#" + req.param("path");
    res.end(currentPath);
});

var server = app.listen(6900, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('App listening at http://%s:%s', host, port)
})