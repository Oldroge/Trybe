const { ObjectId } = require('bson');
const connection = require('./connection');

const getAll = async () => {
  return connection()
    .then((db) => db.collection('books').find().toArray());
}

const getByAuthorId = async (id) => connection()
    .then((db) => db.collection('books').find({ author_id: Number(id) }).toArray());
module.exports = {
  getAll,
  getByAuthorId
}
