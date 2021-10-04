// Structure the tests using mocha and chai to a function that will say if a number is "positive", "negative" or "neutral";
// This function will receive a number as parameter and returns a string as answer;
// When the passed number were bigger than 0 should return "positive", when were less than 0 should return "negative" and when equals 0 should return "neutral";
const { expect } = require('chai');

const biggerLessThan = require('./test1');

describe('Number bigger than 0', () => {
  it('Should return positive', () => {
    const biggerThan = biggerLessThan(1);
    expect(biggerThan).equals('positive');
  });
});

describe('Number less than 0', () => {
  it('Should return negative', () => {
    const lessThan = biggerLessThan(-1);
    expect(lessThan).equals('negative');
  });
});

describe('Number equals 0', () => {
  it('Should return neutral', () => {
    const equals = biggerLessThan(0);
    expect(equals).equals('neutral');
  });
});
