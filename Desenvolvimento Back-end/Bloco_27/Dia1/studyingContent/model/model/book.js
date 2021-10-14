const connection = require('./connection');
const author = require('./author');

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

    return book.map(serialize).map(newBook);
}

const isValid = async (title, author_id) => {
  if (!title || title.length < 3 || typeof title !== 'string') return false;
  if (!author_id || typeof author_id !== 'number' || !(await author.findById(author_id))) return false;
  
  return true;
};

const create = async (title, author_id) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES (?, ?)',
  [title, author_id],
);

module.exports = {
  getAll,
  getBookId,
  isValid,
  create
};
