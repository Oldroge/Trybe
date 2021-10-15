const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getAll = async () => {
  return connection()
    .then((db) => db.collection('books').find().toArray());
}

const getByAuthorId = async (id) => connection()
    .then((db) => db.collection('books').find({ author_id: Number(id) }).toArray());


const getBookId = async (bookId) => {
  if (!ObjectId.isValid(bookId)) return null;

  const book = connection()
    .then((db) => db.collection('books').find(ObjectId(bookId)).toArray());
  
  if (!book) return null;
  
  return book;  
};

module.exports = {
  getAll,
  getByAuthorId,
  getBookId
}
