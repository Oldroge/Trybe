const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'oldroge',
  password: '80638103487125',
  host: 'localhost',
  database: 'model_example',
});

module.exports = connection;