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
    .execute(
      'INSERT INTO users (first_name, last_name, email, password) VALUES(?, ?, ?, ?)',
    [firstName, lastName, email, password],
  )
  .then(([result]) => ({ id: result.insertId, firstName, lastName, email }));
}

const getUser = () => {
  return connection
  .execute('SELECT * FROM users_crud.users')
  .then(([result]) => result.map(formatUser));
}

const getUserById = async (id) => {
  return connection
  .execute(
    'SELECT * FROM users_crud.users WHERE id = ?',
    [id]
    )
    .then(([result]) => result.map(formatUser));
};

const updateUser = async (id, { firstName, lastName, email, password }) => {
  await connection
  .execute(
    'UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?',
    [firstName, lastName, email, password, id]
  );
  return getUserById(id);
}

module.exports = {
  createUser,
  getUser,
  getUserById,
  updateUser
}