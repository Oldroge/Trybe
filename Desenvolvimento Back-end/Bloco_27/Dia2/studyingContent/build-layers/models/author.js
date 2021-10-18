// hello-msc/models/Author.js

const connection = require('./connection');
const { ObjectId } = require('mongodb');

// Create a string with the authors fullname;
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

// Search all authors in the database;
const getAll = async () => {
  return connection()
    .then((db) => db.collection('authors').find().toArray())
    .then((authors) =>
      authors.map(({ _id, firstName, middleName, lastName }) =>
        getNewAuthor({
          id: _id,
          firstName,
          middleName,
          lastName,
        })
      )
  );
}

/*
Search an specify author from the self ID
@param {String} id authors ID to be recovered
*/
const findById = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  const authorData = await connection()
    .then((db) => db.collection('authors').findOne(new ObjectId(id)));

  if (!authorData) return null;

  const { firstName, middleName, lastName } = authorData;

  return getNewAuthor({ id, firstName, middleName, lastName });
};

const isNonEmptyString = (value) => {
  if (!value) return false;

  return typeof value === 'string';
};

const isValid = (firstName, middleName, lastName) => {
  if (middleName && typeof middleName !== 'string') return false;

  return isNonEmptyString(firstName) && isNonEmptyString(lastName);
};

const create = async (firstName, middleName, lastName) =>
  connection()
    .then((db) => db.collection('authors').insertOne({ firstName, middleName, lastName }))
    .then(result => getNewAuthor({ id: result.insertedId, firstName, middleName, lastName }));

const findByName = async (firstName, middleName, lastName) => {
  // Determine if should search with or without the middle name;
  const query = middleName
    ? { firstName, middleName, lastName }
    : { firstName, lastName };

  // Execute the query and return the result;
  const author = await connection()
    .then((db) => db.collection('authors').findOne(query));

  // Case neither author be find, return null
  if (!author) return null;

  // Case contrary, returns the finded author;
  return getNewAuthor(author);
};

module.exports = {
  getAll,
  findById,
  isValid,
  create,
  findByName
};
