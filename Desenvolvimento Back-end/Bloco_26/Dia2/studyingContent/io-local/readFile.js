// Reading files with async methods;

// With async methods are used a readFile method from fs function, that receive 3 parameters:
// - First parameter: Receive a file to make the rading;
// - Second parameter: (optional) when is a string, define the encoding that will be used a file read;
// - Third parameter: A callback that receive and manipulate datas readed in the file;
const fs = require('fs');

const nomeDoArquivo = 'meu-arquivo.txt';

fs.readFile(nomeDoArquivo, 'utf8', (err, data) => {
  if (err) {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1);
  }
  console.log(`Conteúdo do arquivo: ${data}`);
});


// Import fs as promise:
const fs = require('fs').promises;

const nomeDoArquivo = 'meu-arquivo.txt';

fs.readFile(nomeDoArquivo, 'utf8')
  .then((data) => {
    console.log(`Conteúdo do arquivo: ${data}`);
  })
  .catch((err) => {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1); // End the scripts run and info to the operational system that happen an error;
  });