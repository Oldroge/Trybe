// The sinon tool provide functions called test Doubles, like in the movies;

// How to install the sinon tool:
npm install --save-dev sinon

// Example:
// Call fs module to stub
const fs = require('fs');
// call the sinon tool as the same way
const sinon = require('sinon');

// Using the sinon, calling the stub object, will simulate the function to test; 
sinon.stub(fs, 'readFileSync')
// At least, returns, that should return a given result;
  .returns('Valor a ser retornado');