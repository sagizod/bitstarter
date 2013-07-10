var express = require('express');

var filesys = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  ilesys.readFileSync(index.html,function (err, data));
  response.send(data.toString("utf-8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
