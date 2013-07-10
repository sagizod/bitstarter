var express = require('express');

var app = express.createServer(express.logger());

var filesys = require('fs');
var infile = "index.html";
var buff=filesys.readFileSync(infile);

app.get('/', function(request, response) {
response.send(buff.toString('utf-8'));

});
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
