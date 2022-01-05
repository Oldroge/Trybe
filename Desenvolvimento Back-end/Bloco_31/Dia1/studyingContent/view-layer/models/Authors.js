const connection = require('./connection');
// Create a string with author fullname

const getNewAuthor = (authorData) => {
const { id, firstName, middleName, lastName } = authorData;

const fullName = [firstName, middleName, lastName]
  .filter((name) => name)
  .join(' ');

return {
  id,
  firstName,
  middleName,
  lastName,
  name: fullName,
 };
};

// Searialize the field names from snake_case to camelCase

const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name});

// Find all data authors

const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM authors;',
  );
  return authors.map(serialize).map(getNewAuthor);
};

const findById = async (id) => {
  const [
    authorData,
  ] = await connection.execute(
    'SELECT  first_name, middle_name, last_name FROM authors WHERE id = ?',
    [id]
  );

  if (!authorData.length) return null;

  const { firstName, middleName, lastName } = authorData.map(serialize)[0];

  return getNewAuthor({
    id,
    firstName,
    middleName,
    lastName,
  });
};

module.exports = {
  getAll,
  findById
};
