const connection = require('./connection');

const getAllBooks = async () => connection()
  .then((db) => db.collection('books')
  .find()
  .toArray()
  .then((books) => books));

  module.exports = {
    getAllBooks
  }