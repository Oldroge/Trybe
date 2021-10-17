const connection = require('./connection');

const formatUser = ({ id, first_name: firstName, last_name: lastName, email }) => {
  return {
    id,
    firstName,
    lastName,
    email
  }
}

const createUser = ({ firstName, lastName, email, password }) => {
  return connection
    .execute('INSERT INTO users (first_name, last_name, email, password) VALUES(?, ?, ?, ?)',
    [firstName, lastName, email, password],
  )
  .then(([result]) => ({ id: result.insertId, firstName, lastName, email }));
}

module.exports = {
  createUser
}