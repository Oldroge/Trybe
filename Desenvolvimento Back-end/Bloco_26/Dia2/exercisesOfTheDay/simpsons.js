//1 - Create a function that read all data files and print each character in id - nome format. Example: 1 - Homer Simpson;
const fs = require('fs');
function readData(file) {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, response) => {
      if (err) return reject(err);
      resolve(JSON.parse(response)[0].name);
    })
  })
  return promise;
}

readData('./simpsons.json')
  .then((response) => {
    console.log(response)
  })
  .catch((err) => {
    console.log(err)
  })