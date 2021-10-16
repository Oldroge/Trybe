const { ObjectId } = require('bson');
const connection = require('./connection');

const createNewUser = async ({ firstName, lastName, email, password }) => {
  connection()
    .then((db) => db.collection('users')
    .insertOne({
      firstName,
      lastName,
      email,
      password
    }))
    .then((dataUser) => ({
      id: dataUser.insertedId,
      firstName,
      lastName,
      email
    }))
};

const getTheUsers = async () => {
  return connection()
    .then((db) => db.collection('users')
    .find()
    .toArray()
    .then((users) => users));
};

module.exports = {
  createNewUser,
  getTheUsers
}