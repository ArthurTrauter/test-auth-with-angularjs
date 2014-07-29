var http = require('http');
var login = require('login');

http.createServer(function (req, res) {
  login(req, res);
}).listen(8080, 'localhost');
console.log('Server running at http://localhost:8080/');
