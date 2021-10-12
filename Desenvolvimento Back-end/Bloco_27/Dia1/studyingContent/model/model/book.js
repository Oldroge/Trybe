const connection = require('./connection');

// Create a Book model and define the method getAll to return the all list of books;

const getByAuthorId = (author_id) => {
  return {
    id: author_id,
    title,
  }
}

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT * FROM model_example.books'
  );
  return books;
};
module.exports = {
  getAll,
};
