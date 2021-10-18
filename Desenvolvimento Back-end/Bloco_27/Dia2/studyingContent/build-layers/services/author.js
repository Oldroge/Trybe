const Author = require('../models/author');

const getAll = async () => Author.getAll();

const findById = async (id) => {
  // Request that the model perform the search in the dabase;
  const author = await Author.findById(id);

  // Case neither author be find, returns a error object;
  if (!author) {
    return {
      error: {
        code: 'notFound',
        message: `Não foi possível encontrar um autor com o id ${id}`,
      },
    };
  }

  // Case have an author with the informed ID, returns this author;
  return author;
};

const create = async (firstName, middleName, lastName) => {
    // Search a author with the same fullname that wish create;
    const existingAuthor = await Author.findByName(firstName, middleName, lastName);

    // Case this author already exist, returns a error object info
    // that doesnt possible create the author because he already exists;
    if (existingAuthor) {
      return {
        error: {
          code: 'alreadyExists',
          message: 'Um autor já existe com esse nome completo',
        },
      };
    }
  // Case the author doesnt exist and, therefore, can be created
  // called the model and return the results;
    return Author.create(firstName, middleName, lastName);
}

module.exports = {
  getAll,
  findById,
  create,
};
