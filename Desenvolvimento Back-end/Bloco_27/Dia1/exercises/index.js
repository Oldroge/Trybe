const express = require('express');
const app = express();

const setNewUser = require('./model/user');

app.use(express.json());

const validateDatas = require('./middlewares/validateDatas');

const PORT = 3000;

app.get('/user', async (_req, res) => {
  res.status(200).json(await setNewUser.getUsers());
})

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const findUserId = await setNewUser.findUserId(id);
  res.status(200).json(findUserId);
})

app.post('/user',
validateDatas,
async (req, res) =>{
  const { firstName, lastName, email, password } = req.body;

  const newUser = await
  setNewUser.setNewUser({
    firstName,
    lastName,
    email,
    password
  });
  res.status(200).json(newUser);
})

app.put('/user/:id',
validateDatas,
async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;
  const updateUser = await setNewUser.updateUser(
    id, firstName, lastName, email, password
  );
  res.status(200).json(updateUser)
})

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
})
