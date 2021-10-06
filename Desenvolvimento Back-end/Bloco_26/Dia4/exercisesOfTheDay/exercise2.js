// Create a route POST /hello;
// Your route should receive, in the requisition body, the follow JSON: { "name": "<username>" };
// Your route should return the follow JSON: { "message": "Hello, <username>!" }.
const express = require('express');
const app = express();

app.post('/hello', (_req, res) => {
  res.status(200).json({ name: "Roge" });
});

app.get('/hello', (req, res) => {
  const { name } = req.query;
  res.status(200).json({ "message": `Hello, ${name}!` })
})

app.listen(3001, () => {
  console.log('port 3001');
});
