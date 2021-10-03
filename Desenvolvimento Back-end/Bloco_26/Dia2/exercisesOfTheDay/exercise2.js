// Use the promise.all to manipulate many files at the same time;

const fs = require('fs/promises');

const array = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'] 

async function usePromiseAll() {
  const addItem = (item, index) => {
    Promise.all([
      fs.writeFile(`file${index + 1}.txt`, item),
    ])
  };
  array.forEach(addItem);

  const phrase = await Promise.all([
    fs.readFile(`file1.txt`, 'utf-8'),
    fs.readFile(`file2.txt`, 'utf-8'),
    fs.readFile(`file3.txt`, 'utf-8'),
    fs.readFile(`file4.txt`, 'utf-8'),
    fs.readFile(`file5.txt`, 'utf-8')
  ])
  .then((results) => results
  .join(' '));
  fs.writeFile(`fileAll.txt`, JSON.stringify(phrase));
};
usePromiseAll();

// Now programe your function for what it does the read of all files created before, store this infos and write in a file called fileAll.txt
