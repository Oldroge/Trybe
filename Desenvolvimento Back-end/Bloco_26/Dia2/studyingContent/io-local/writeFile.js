// Using the writeFile method;
// As known in other examples, exist methods to read files, here are display a method to write files;
const fs = require('fs').promises;
// In the first parameter, the write file receive the file that wants to change and the second parameter is the new data;
fs.writeFile('./meu-arquivo.txt', 'Water in the playground!')
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });
// The rest of the method as seen previously;
