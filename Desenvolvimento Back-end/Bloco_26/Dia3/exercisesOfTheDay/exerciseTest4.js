// Create tests for a function that write a content in a especific file;
// This function should receive two parameters: The file name and this content file;
// After conclude the file write it should return a ok;

// Describe all test scenarios using describes;
// Describe all the tests that will be done using its;
// create assertions validating whether the functions return have the value and type waited;

const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const writeFile = require('./test4');

describe('The file behavior', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync')
      .returns('ok');
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  it('Should create file and return a ok as content', () => {
    const writeAndReturn = writeFile('text.txt', 'ok');
    expect(writeAndReturn).to.be.equals('ok');
  })
})