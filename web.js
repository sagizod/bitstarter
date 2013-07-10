var express = require('express');

var filesys = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  filesys.readFileSync(index.html,'utf-8',function (err, data));
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
