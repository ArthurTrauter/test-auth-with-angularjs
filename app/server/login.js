exports.login = function(req, res) {
  var username = req.body.username || '';
  var password = req.body.password || '';

  if (username == '' || password == '') {
    return res.send(401);
  }

  var user = {
    first_name: 'John',
    last_name: username,
    email: 'john@doe.com',
    role: 'rz'
  };

  var token = jwt.sign(user, secret.secretToken, { expiresInMinutes: 60 });

  return res.json({token: token});
};
