// userModel.js

const db = require('./db'); // A fake file that represents the connection with database;

async function getUser (username) {
    return db.findOne({ username })
    .then(result => result || null);
}
// Now can use this file in any place where need an user. For example, in the comand-line interface;

// The following codes will be an example if were be using other file;

// cli.js
const readline = require('readline-sync');
// Here is how "import" the previous code in other file;
const userModel = require('./userModel');

async function start() {
    const username = readline.question('Type your username');
    const user = await userModel.getUser(username);

    if (!user) {
        return console.log('User not found!');
    }

    console.log('Here are the user data:');
    console.log(user);
}

start();

//At the same time could use the model in the middleware;
// getUserMiddleware.js

const userModel = require('./userModel');

async function getUserMiddleware (req, res, next) {
    const { username } = req.body;

    const user = await userModel.getUser(username);

    if (!user) {
        return res.status(404).json({ message: 'user not found' });
    }

    return res.status(200).json(user);
}

// This way, if our users were stored in other place, as a file, or another database, it can needed change only the userModel.js file and everything will be fine;