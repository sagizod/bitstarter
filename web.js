var express = require('express');

var app = express.createServer(express.logger());

var filesys = require('fs');

app.get('/', function(request, response) {
  filesys.readFileSync("index.html", 'utf-8', function (err, data){

    if (err) {
    console.log('Error: ' + err);
    return;
  
}

}
);

response.send(data);

});
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
