const booksModel = require('../models/books-model');

const getAllBooks = async () => booksModel.getAllBooks();

module.exports = {
  getAllBooks
}