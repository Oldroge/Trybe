const express = require('express');
const app = express();

const authors = require('./model/author');
const books = require('./model/book');

const PORT = 3000;

app.get('/authors', async (req, res) => {
  res.status(200).json(await authors.getAll());
});

// Refactore the getAll method by models/Book to use the Mongo with databases;
app.get('/books', async (req, res) => {
  console.log(await books.getAll());
  res.status(200).json(await books.getAll());
})

app.listen(PORT, () => {
  console.info(`Listen port ${PORT}`);
})