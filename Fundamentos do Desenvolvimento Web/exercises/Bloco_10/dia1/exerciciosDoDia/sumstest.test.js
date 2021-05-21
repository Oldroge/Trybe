const sum = require('./sumtest');

test('Sum two values', () => {
  expect(sum(2, 3)).toBe(5);
})
