// Create a route GET/ ping: Your route should return the follow JSON: { message: 'pong' };
const express = require('express');
const app = express();

app.get('/ping', (_req, res) => {
  res.send({ message: 'pong' });
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})
