const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const author = require('./model/author');
const books = require('./model/book');

app.use(bodyParser.json());

app.get('/authors', async (req, res, next) =>{
  const authors = await author.getAll();
  res.status(200).json(authors);
})

app.get('/authors/:id', async (req, res, next) =>{
  const { id } = req.params;

  const authors = await author.findById(id);

  if (!authors) return res.status(404).json({ message: 'Not Found' });

  res.status(200).json(authors);
});

app.post('/authors', async (req, res) => {
  const { firstName, middleName, lastName } = req.body;

  if (author.isValid(firstName, middleName, lastName)) {
    return res.status(400).json({ message: 'Invalid datas!' })
  }
  await author.createAuthor(firstName, middleName, lastName);

  res.status(201).json({ message: 'Author created success!!' })
})

// Create a root /books/:id and return the book with the id passed by parameter. If doesnt exist, return a json in the following format { message: 'Not Found' };
app.get('/books/:id', async (req, res) => {
  const { id } = req.params;

  const book = await books.getBookId(id);

  console.log(book)
  
  if (!book) return res.status(404).json({ message: 'Not Found'  });

  const filterBooks = book.filter((bookId) => bookId.id === id);

  res.status(200).json(book);
})

app.listen(3000, server =>{
  console.info(`Server listen on port 3000`);
})