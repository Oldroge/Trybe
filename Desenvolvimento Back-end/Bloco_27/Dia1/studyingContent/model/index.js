const express = require('express');
const app = express();
const path = require('path');

const author = require('./model/author');

app.get('/authors', async (req, res, next) =>{
  const authors = await author.getAll();
  res.status(200).json(authors);
})

app.listen(3000, server =>{
  console.info(`Server listen on port 3000`);
})