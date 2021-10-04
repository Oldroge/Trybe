// Add the function a treatment to cases that the parameter informed dont be Number type;
const { expect } = require('chai');

const notAString = require('./test3');

describe('The value cant be a string', () => {
  it('If the value equals string returns a message', () => {
    const notString = notAString('1');
    expect(notString).equals('The value should be a number');
  });

  it('If a number should return a number', () => {
    const notString = notAString(1);
    expect(notString).equals(notString);
  })
});