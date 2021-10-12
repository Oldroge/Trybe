const { ObjectId } = require('bson');
const connection = require('./connection');

const setNewUser = async ({ firstName, lastName, email, password }) => {
  return connection()
    .then((db) => db.collection('users')
    .insertOne({ firstName, lastName, email, password }))
    .then((userData) => ({
      id: userData.insertedId,
      firstName,
      lastName,
      email
    }));
};

const getUsers = async () => {
  return connection()
    .then((db) => db.collection('users')
    .find()
    .toArray()
    .then((users) => users))
};

const findUserId = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }
  return connection()
    .then((db) => db.collection('users')
    .findOne(ObjectId(id)))
    .then((object) => object);
}

const updateUser = async (id, firstName, lastName, email, password) => {
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
      .then(
        (response) => response
        .matchedCount 
        ? ({ id, firstName, lastName, email, password })
        : (
            {
              "error": true,
              "message": "Usuário não encontrado"
            }
          )
        )
}

module.exports = {
  setNewUser,
  getUsers,
  findUserId,
  updateUser
};