// A example about how to use synchronous method;
const fs = require('fs');

const nomeDoArquivo = 'meu-arquivo.txt';

try {
  // As the function are sync, were used the method readFileSync from fs to read the const 'nomeDoArquivo synchronous, all the function will wait the readFileSync method read all the content in the nomeDoArquivo, then run the rest;
  const data = fs.readFileSync(nomeDoArquivo, 'utf8');
  // Case everything runs okay, it display the data in the console
  console.log(data);
} catch (err) {
  // Else, it display this error
  console.error(`Erro ao ler o arquivo: ${err.path}`);
  console.log(err);
};
