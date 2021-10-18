const rescue = require('express-rescue');
const booksService = require('../service/books-service');

const getAllBooks = rescue(async (_req, res) => {
  const books = await booksService.getAllBooks();

  res.status(200).json(books);
});

module.exports = {
  getAllBooks
}