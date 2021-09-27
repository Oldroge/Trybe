// Working with Async/ Await;

// Besides use API doesnt make sense for what you are looking for, so can be used async/await;
const fs = require('fs').promises;
// Create a function indicating that is a async function
async function main() {
  try {
    // Then use await to the writeFile return a response as bellow:
    await fs.writeFile('./meu-arquivo.txt', 'Children in the playground!');
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}
// Execute func above
main()
// Notice: To use the async/await is necessary to create a function, it happen cause for a while, only can be used await within async function;
// The writeFile have a third parameter that can especify how a file should be open, example:
// The default is 'w', that is, if the file exist, overwrite. Case doesnt exist, create a new one;
// Exist other flags that can be seen in the documentation;

// Promise.all;
// Promise.all is a method who allows pass a promises array and receive back only one Promise.

// To call the fs nothing change
const fs = require('fs').promises;

// Call the Promise.all method and set the files
Promise.all([
  fs.readFile('file1.txt'),
  fs.readFile('file2.txt'),
  fs.readFile('file3.txt'),
])
// Use then to bring the results
  .then(([file1, file2, file3]) => {
    // This const will sum the byteLength of each file
    const fileSizeSum = file1.byteLength + file2.byteLength + file3.byteLength;
    // And display the result
    console.log(`Lidos 3 arquivos totalizando ${fileSizeSum} bytes`);
  })
  // Case something went wrong, return a error;
  .catch((err) => {
    console.error(`Erro ao ler arquivos: ${err.message}`);
  });
  