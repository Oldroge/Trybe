const { MongoClient } = require('mongodb');

const MONGO_URL = 'mongodb:/127.0.0.27017';

const OPTIONS = {
  urlNewParser: true,
  useUnifiedTopology: true
};

const connection = () => {
  return MongoClient
    .connect(MONGO_URL, OPTIONS)
    .then((conn) => conn.db('model_example'))
    .catch((err) => {
      console.error(err);
      process.exit();
    });
};

// Bellow it is other way to buid this connection with the mongodb;
// let db = null;

// const connection = () => {
//     return db
//     ? Promise.resolve(db)
//     : MongoClient.connect(MONGO_DB_URL, OPTIONS)
//     .then((conn) => {
//     db = conn.db('model_example');
//     return db;
//     })
// };

module.exports = connection;
