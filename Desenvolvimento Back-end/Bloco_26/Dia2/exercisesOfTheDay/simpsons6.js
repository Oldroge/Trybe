// Create a function that change the character Nelson Muntz by character Maggie Simpson in the simpsonsFamily.json file;
const fs = require('fs/promises');

async function changeCharacter() {
  const simpsons = await fs
    .readFile('./simpsonsFamily.json', 'utf-8')
    .then((response) => JSON.parse(response))
    .then((response) => response
    .filter((deleteNelson) => deleteNelson.id !== '8'));

    simpsons.push({ "id": "5", "name": "Maggie Simpson" })

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsons));
};
changeCharacter();
