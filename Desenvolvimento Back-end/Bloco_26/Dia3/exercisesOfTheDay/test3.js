const notAString = (number) => {
  if (typeof number === 'string') return "The value should be a number";
  return number;
};

module.exports = notAString;
