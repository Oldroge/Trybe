const biggerLessThan = (num) => {
  if (num > 0) return "positive";
  if (num < 0) return "negative";
  return "neutral";
}

module.exports = biggerLessThan;