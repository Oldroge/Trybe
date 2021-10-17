const express = require('express');
const app = express();
const bodyParse = require('body-parser');

const { validateDatas } = require('./middlewares/validateDatas');

const {
  createUser,
  getUser
} = require('./model/user');

app.use(bodyParse.json());

const PORT = 3002;

app.post('/users',
validateDatas,
async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password
  } = req.body;

  const addUser = await createUser({
    firstName,
    lastName,
    email,
    password
  });

  return res.status(201).json(addUser);
});

app.get('/users', async (_req, res) => {
  const getAllUsers = await getUser();
  if (getAllUsers.length === 0) {
    return res.status(404).json([])
  }
  return res.status(200).json(await getUser())
})

app.listen(PORT, () => {
  console.log(`Listen port ${PORT}`);
});