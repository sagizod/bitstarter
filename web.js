var express = require('express');

var app = express.createServer(express.logger());

//var filesys = require('fs');

app.get('/', function(request, response) {
//  var buff = filesys.readFileSync("index.html");
  response.send("buff");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
