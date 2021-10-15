const { ObjectId } = require('bson');
const connection = require('./connection');

const getAll = async () => {
  return connection()
    .then((db) => db.collection('books').find().toArray());
}

module.exports = {
  getAll
}
