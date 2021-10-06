const fs = require('fs/promises');

function simpsons() {
  return fs.readFile('./simpsons.json', 'utf-8')
  .then((response) => JSON.parse(response)); 
}

function writeSimpsons(simpson) {
  return fs.writeFile('./simpsons.json', JSON.stringify(simpson));
};

module.exports = {
  simpsons,
  writeSimpsons
};
