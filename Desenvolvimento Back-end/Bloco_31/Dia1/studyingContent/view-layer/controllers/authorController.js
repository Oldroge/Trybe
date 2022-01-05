const Author = require('../models/Authors');

const listAuthors = async (_req, res) => {
  const authors = await Author.getAll();

  return res.status(200).render('authors/index', { authors });
};

module.exports = {
  listAuthors
}
