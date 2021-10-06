// Create a route PUT /users/:name/:age .
// Your route should return the following JSON: { "message": "Your name is <name> and you have <age> years old" }
const express = require('express');
const app = express();

app.put('/users/:name/:age ', (req, res) => {
  const { name, age } = req.body;
  res.status(200).json({ "message": `Your name is ${name} and you have ${age} years old` });
});

app.listen(3001, () => {
  console.log('Port 3001 - exercise 4');
});
