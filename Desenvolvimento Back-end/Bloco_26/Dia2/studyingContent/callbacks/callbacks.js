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


// Disadvantage to use callbacks:
const fs = require('fs');

// Notice: callbacks only can use your results within call from function, soon, the function start to have many indentation and it becomes unreadable as can see:
fs.readFile('file1.txt', (err, file1Content) => {
  if (err) return console.log(`Erro ao ler arquivo 1: ${err.message}`);

  console.log(`Lido file1.txt com ${file1Content.byteLength} bytes`);

  fs.readFile('file2.txt', (err, file2Content) => {
    if (err) return console.log(`Erro ao ler o arquivo 2: ${err.message}`);

    console.log(`Lido file2.txt com ${file2Content.byteLength} bytes`);

    fs.readFile('file3.txt', (err, file3Content) => {
      if (err) return console.log(`Erro ao ler o arquivo 3: ${err.message}`);

      console.log(`Lido file3.txt com ${file3Content.byteLength} bytes`);
    });
  });
});
// Here can't have a lot of sense, but in biggest functions, it common called as callback hell, that is when we have a call back within other and other...


// Try to solve this problem:
// A way to try solve this problem is creating function that call callbacks separatly, it doesnt look pretty or even readeble, what difficult the maintenance;
const fs = require('fs');

const file3Callback = (err, file3Content) => {
  if (err) return console.log(`Erro ao ler o arquivo 3: ${err.message}`);

  console.log(`Lido file3.txt com ${file3Content.byteLength} bytes`);
};

const file2Callback = (err, file2Content) => {
  if (err) return console.log(`Erro ao ler o arquivo 2: ${err.message}`);

  console.log(`Lido file2.txt com ${file2Content.byteLength} bytes`);

  fs.readFile('file3.txt', file3Callback);
};

const file1Callback = (err, file1Content) => {
  if (err) return console.log(`Erro ao ler arquivo 1: ${err.message}`);

  console.log(`Lido file1.txt com ${file1Content.byteLength} bytes`);

  fs.readFile('file2.txt', file2Callback);
};

fs.readFile('file1.txt', file1Callback);
// Besides to difficult the read, its much more hard to uderstand instantly which is the flow;
