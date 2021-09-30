// Use the promise.all to manipulate many files at the same time;
const fs = require('fs/promises');

const array = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'] 

function usePromiseAll() {
  const addItem = (item, index) => {
    Promise.all([
      fs.writeFile(`file${index + 1}`, item),
    ])
  }
  return array.forEach(addItem);
};
usePromiseAll();
