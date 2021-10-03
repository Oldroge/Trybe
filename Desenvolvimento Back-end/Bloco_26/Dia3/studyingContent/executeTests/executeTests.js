// Before start the testes it is required create the node package to include the necessaries scripts in package.json;

// the code bellow start the node package;
npm init # Iniciando o npm

// After it look like this inside the package.json:
{
  // ...
    "scripts": {
      "start": "node index.js",
      "test": "mocha tests"
    },
  // ...
}

// This way, isnt needed to install global, and to execute the tests quite run in prompt the script test, that will run the command mocha tests using the install module;
npm run test
// or
npm test
