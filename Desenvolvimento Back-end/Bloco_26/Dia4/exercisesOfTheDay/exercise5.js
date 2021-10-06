// Create an datas API from Simpsons characters;
// Create a filme called simpsons.json and populate with the characters; 
const rescue = require('express-rescue');
const express = require('express');
const app = express();

const simpsonsUtils = require('./utils');

app.get('/simpsons', rescue(async (_req, res) => {
  const simpsons = await simpsonsUtils.simpsons();

  res.status(200).json(simpsons);
  console.log(simps)
}));

app.listen(3001, () => {
  console.log('Port 3001 - exercise 5');
});
