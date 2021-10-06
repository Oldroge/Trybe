// Create a route POST /greetings;
// Your route should receive the following JSON: { "name": "<username>", "age": <user age> };
// Case the user person have age bigger than 17 years, return the JSON: { "message": "Hello, <username>!" } with the status code 200 - ok;
// Case the user person have 17 years or less, return the JSON { "message": "Unauthorized" } with the status code 401 - Unauthorized
const express = require('express');
const app = express();

app.post('/greetings', (req, res) => {
  const { name, age } = req.query;
  if (age > 17) res.status(200).json({ "message":`Hello, ${name}!` });
  res.status(401).json({ "message": "Unauthorized" });
})

app.listen(3001, () => {
  console.log('Port 3001 - exercise 3')
})
