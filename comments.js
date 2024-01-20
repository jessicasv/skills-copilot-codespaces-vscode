//Create web server using node.js
var http = require('http');
//Create a server object:
http.createServer(function (req, res) {
    //Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, {'Content-Type': 'text/plain'});
    //Send the response body "Hello World"
    res.end('Hello World\n');
}).listen(8080); //listen to port 8080 by default
console.log('Server running at http://