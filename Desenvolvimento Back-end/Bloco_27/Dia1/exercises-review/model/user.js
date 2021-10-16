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

const getTheUsersById = async (id) => {
  return connection()
    .then((db) => db.collection('users')
    .find({ _id: ObjectId(id) })
    .toArray())
}

const updateUserById = async (id, firstName, lastName, email, password) => {
  return connection()
    .then((db) => db.collection('users')
    .updateOne(
      { _id: ObjectId(id) },
      {
        $set: {
          firstName,
          lastName,
          email,
          password
        }
      }
      ))
    .then((UpdatedUser) => UpdatedUser
    .matchedCount
    ? ({ id, firstName, lastName, email, password })
    : (
        {
          "error": true,
          "message": "Usuário não encontrado"
        }
      )
    );
};

module.exports = {
  createNewUser,
  getTheUsers,
  getTheUsersById,
  updateUserById
}