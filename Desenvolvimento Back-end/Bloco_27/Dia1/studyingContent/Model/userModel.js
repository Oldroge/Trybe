// userModel.js

const db = require('./db'); // A fake file that represents the connection with database;

async function getUser (username) {
    return db.findOne({ username })
    .then(result => result || null);
}
// Now can use this file in any place where need an user. For example, in the comand-line interface;