// Create a function that change the file simpsons.json removing the characters with id 10 and 6;
const fs = require('fs/promises');

async function removeCharacter() {
  const remove = await fs
    .readFile('./simpsons.json', 'utf8')
    .then((response) => JSON.parse(response));
  const newDoc = remove
    .filter((remove) => remove.id !== '10' && remove.id !== '6');
  await fs.writeFile('./simpsons.json', JSON.stringify(newDoc));
};
removeCharacter();
