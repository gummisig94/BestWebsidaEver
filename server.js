'use strict';
var http = require('http');
var hostname = '127.0.0.1';
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
server.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
}).listen(port, hostname, function(){
    console.log('Server running at http://'+ hostname + ':' + port + '/');
});

server.get("/folf", (req, res) => {
    res.sendFile(__dirname + '/folf.html');
 });

// https://www.pluralsight.com/guides/getting-started-with-nodejs
