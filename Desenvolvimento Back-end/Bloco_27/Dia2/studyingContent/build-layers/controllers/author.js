// hello-msc/controllers/Author.js

const rescue = require('express-rescue');
const service = require('../services/author');

const Joi = require('joi');

const getAll = rescue(async (_req, res) => {
  const authors = await service.getAll();

  res.status(200).json(authors);
});

const findById = rescue(async (req, res, next) => {
  // Extract the id from the requires
  const { id } = req.params;

  // Ask to the service search the author
  const author = await service.findById(id);

  // Case the service return a error, interrupt the proccessing
  // and init the error flow; 
  if (author.error) return next(author.error);

  // Case havent any error, return the author finded;
  res.status(200).json(author);
});

const create = rescue(async (req, res, next) => {
  // Using the Joi to describe the object waited
  // receive in the requisition. For that, it called Joi.object()
  // pass a object with the requisitions field and your describes;
  const { error } = Joi.object({
    // Should be a string (.string()) not empty (.not().empty()) and it is required (.required());
    firstName: Joi.string().not().empty().required(),
    // Isnt required, but, case be informed, should be a string not empty;
    middleName: Joi.string().not().empty(),
    // Should be a string not empty and it is required;
    lastName: Joi.string().not().empty().required(),
  })
    // Finally, it asked that the Joi verify if the resitions body suits this rules;
    .validate(req.body);

  // Case exists some problem with the validation, it start the error flow and interrupt the middleware;
  if (error) {
    return next(error);
  }

  // Case havent validation error, continue the users create;
  const { firstName, middleName, lastName } = req.body;

  const newAuthor = await service.create(firstName, middleName, lastName);

  // Case it have error in the authors criation, it start the errors flow;
  if (newAuthor.error) return next(newAuthor.error);

  // Case be all right, it returns the status 201 Created, together with the new authors info;
  return res.status(201).json(newAuthor);
});

module.exports = {
  getAll,
  findById,
  create
};
