var express = require('express');

var app = express.createServer(express.logger());

var filesys = require('fs');

var buff;

app.get('/', function(request, response) {
  filesys.readFileSync("index.html", 'utf-8', function (err, data){

    if (err) {
    console.log('Error: ' + err);
    return;
  
}
buff=data.toString('utf-8');
}
);

response.send(buff);

});
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
