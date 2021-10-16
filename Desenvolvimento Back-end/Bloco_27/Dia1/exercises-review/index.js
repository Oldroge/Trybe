const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const { validateDatas } = require('./middleweres/validateDatas');
const userModel = require('./model/user');

const PORT = 3001;

app.use(bodyParser.json());

app.post('/users',
validateDatas,
async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password
  } = req.body;

  addNewUser = await
  userModel.createNewUser({
    firstName,
    lastName,
    email,
    password
  });
  res.status(201).json(addNewUser);
});

app.get('/users', async (_req, res) => {
  res.status(200).json(await userModel.getTheUsers());
})

app.listen(PORT, () =>{
  console.log(`Server listen on port ${PORT}`);
});