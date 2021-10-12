const express = require('express');
const app = express();

const author = require('./model/author');
const books = require('./model/book');

app.get('/authors', async (req, res, next) =>{
  const authors = await author.getAll();
  res.status(200).json(authors);
})

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await books.getAll();
  const filterBooks = book.filter((bookId) => bookId.id === Number(id));
  res.status(200).json(filterBooks);
})

app.listen(3000, server =>{
  console.info(`Server listen on port 3000`);
})