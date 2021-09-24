// Calling the fs module
const fs = require('fs');

// From the fs module using the readFile function, it accomplish the reading by file then call the callback;
// The err and content parameters meaning error and content, both can be named as anything but by convention is commonly used this names;
fs.readFile('./arquivo.txt', (err, content) => {
  // The if statement handle the error and if error happen, ir return a mensage as follow:
  if (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
    // Here the first thing to verify it exist an error, if true, return the mensage above, else the function is endded with return bellow;
    return;
  }
// Case any error happen, the file were read with success;
  console.log(`Arquivo lido com sucesso. Conteúdo: ${content.toString('utf8')}`);
});
