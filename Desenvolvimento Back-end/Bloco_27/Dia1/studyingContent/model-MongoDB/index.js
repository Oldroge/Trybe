const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const authors = require('./model/author');
const books = require('./model/book');

const PORT = 3000;

app.use(bodyParser.json());

app.get('/authors', async (req, res) => {
  res.status(200).json(await authors.getAll());
});

app.get('/authors/:id', async (req, res) =>{
  const { id } = req.params;

  const author = await authors.findById(id);

  if (!author) return res.status(404).json({ message: 'Not Found' });

  res.status(200).json(author);
});

// Refactore the getAll method by models/Book to use the Mongo with databases;
app.get('/books', async (req, res) => {
  res.status(200).json(await books.getAll());
})

// Refactore the getById method by models/Book to use the mongo with databases;
app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  res.status(200).json(await books.getBookId(id));
})



app.listen(PORT, () => {
  console.info(`Listen port ${PORT}`);
})