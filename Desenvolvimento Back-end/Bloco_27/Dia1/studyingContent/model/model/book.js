const connection = require('./connection');

// Create a Book model and define the method getAll to return the all list of books;

const newBook = ({ id, title }) => {
  return {
    id,
    title
  }
}

const serialize = (authorData) => {
  return {
    id: authorData.author_id,
    title: authorData.title
  }
}

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT * FROM model_example.books'
  );
  return books;
};

const getBookId = async (authorId) => {
  const [book] = await connection.execute(
    'SELECT * FROM model_example.books WHERE author_id = ?',
    [authorId]
  );
    if (book.length === 0) return null;

    // const { id, title } = serialize(book[0]);

    return book.map(serialize).map(newBook);
}

module.exports = {
  getAll,
  getBookId
};
