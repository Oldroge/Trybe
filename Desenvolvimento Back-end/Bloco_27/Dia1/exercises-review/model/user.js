const connection = require('./connection');

const createNewUser = async ({ firstName, lastName, email, password }) => {
  connection()
    .then((db) => db.collection('users').insertOne({
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

module.exports = {
  createNewUser,
}