const express = require('express');
const app = express();
const bodyParse = require('body-parser');

const {
  createUser
} = require('./model/user');

app.use(bodyParse.json());

const PORT = 3002;

app.post('/users', async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password
  } = req.body;

  const addUser = await createUser({ firstName, lastName, email, password });

  res.status(201).json(addUser);
});

app.listen(PORT, () => {
  console.log(`Listen port ${PORT}`);
});