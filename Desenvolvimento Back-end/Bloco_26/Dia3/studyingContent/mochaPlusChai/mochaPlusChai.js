// Using the require method to call the chai tests and destructuring the expect to use in test;
const { expect } = require('chai');

// Here is a variable that is simulating a require to get what will be tested;
const calculate = require('../chai/chai');

// Using the describe to describe which is the test;
describe('When the average were less than 7', () => {
  // The it describing what this test will test;
  it('returns "repproved"', () => {
    // geting the variable 'calculate' above;
    const answer = calculate(4);
    // Expect that use the variable answer and get in the equals which is the expected results;
    expect(answer).equals('repproved');
  })
})

// Using the to and be getters to let the test readeble;
const { expect } = require('chai');

const calculate = require('../chai/chai');

describe('When the average were less than 7', () => {
  it('returns "repproved"', () => {
    const answer = calculate(4);
    // It been used to.be getters, dont change the results;
    expect(answer).to.be.equals('repproved');
  });
});
