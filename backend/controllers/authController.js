const axios = require('axios');

exports.login = (req, res) => {
  const { username, password } = req.body;
  const keycloakUrl = 'http://localhost:8080/auth/realms/myrealm/protocol/openid-connect/token';
  const client_id = 'myclient';
  const client_secret = 'mysecret';
  const grant_type = 'password';

  axios.post(keycloakUrl, `client_id=${client_id}&client_secret=${client_secret}&username=${username}&password=${password}&grant_type=${grant_type}`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  .then(response => {
    res.send(response.data);
  })
  .catch(error => {
    res.status(500).json({ message: 'Authentication failed' });
  });
};
