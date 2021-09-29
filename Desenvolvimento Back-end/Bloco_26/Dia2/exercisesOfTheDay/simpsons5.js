// Create a function that add to the simplsonFamily.json file the character Nelson Muntz;
const fs = require('fs/promises');

async function addToFile() {
  const simpsons = await fs
    .readFile('./simpsonsFamily.json', 'utf-8')
    .then((response) => JSON.parse(response));
    
  simpsons.push({ "id": "8", "name": "Nelson Muntz" });
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsons));
}
addToFile();
