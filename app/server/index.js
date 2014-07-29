var http = require('http'),
    util = require('util'),
    jwt  = require('express-jwt');

var Login = function () {
  http.createServer(this.dispatcher.bind(this)).listen(1234, 'localhost');
}

Login.prototype.dispatcher = function (request, response) {
  response.setHeader('Content-Type', 'application/json; charset=utf-8');

  var url = request.url.split('/');

  if (url[1] !== 'login') {
    this.error(response, 404, util.format('%s not found', url[1]));
    return false;
  }

  switch(request.method) {
    case 'GET':
      this.authentificate(request, response);
      break;
    default:
      this.error(response, 405, 'Methode not allowed');
  }
};

Login.prototype.error = function (response, code, msg) {
  response.statusCode = code;
  response.end(util.format('{%s}', msg));
};

Login.prototype.authentificate = function (request, response) {
  var username = request.body.username || '';
  var password = request.body.password || '';

  if (username == '' || password == '') {
    this.error(response, 401, 'Username and or password are empty');
    return false;
  }

  var user = {
    name: username,
    role: 'rz'
  };

  var token = jwt.sign(user, {secret: 'shhhhhhared-secret'}, { expiresInMinutes: 60 });

  response.statusCode = 200;
  response.end(util.format('{token: %s}', token));

};

var login = new Login();
console.log('Authentification service is running on port 1234...');
