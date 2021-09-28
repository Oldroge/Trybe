// Create a function that reads the file simpsons.json and create a new file, called simpsonFamily.json, having the characters with id 1 and 4;
const fs = require('fs/promises');

async function createFile() {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((response) => JSON.parse(response));
  const createDoc = simpsons
    .filter(simpson => ['1', '2', '3', '4'].includes(simpson.id));
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(createDoc));
};
createFile();