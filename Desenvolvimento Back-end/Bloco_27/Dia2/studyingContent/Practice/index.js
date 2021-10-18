const express = require('express');
const bodyParser = require('body-parser');

const Books = require('./controller/books-controller');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/books', Books.getAllBooks);

app.listen(PORT, () => {
  console.log(`Listen port ${PORT}`);
});
