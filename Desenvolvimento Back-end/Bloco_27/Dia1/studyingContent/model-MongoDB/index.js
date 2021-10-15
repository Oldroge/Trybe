const express = require('express');
const app = express();

const authors = require('./model/author');

const PORT = 3000;

app.get('/authors', async (req, res) => {
  res.status(200).json(await authors.getAll());
});

app.listen(PORT, () => {
  console.info(`Listen port ${PORT}`);
})