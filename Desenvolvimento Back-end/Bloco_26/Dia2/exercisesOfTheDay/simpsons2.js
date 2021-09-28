// Create a function that receive an id from character as parameter and return a Promise that is resolved with the character datas that have the info id. Case dont have a character with the id informed, reject the Promise with the the reason: "Id not found";
const fs = require('fs').promises;

function characterId(id) {
  const promise = new Promise((resolve, reject) => {
    fs.readFile('./simpsons.json', 'utf8')
      .then((response) => JSON.parse(response))
      .then((char) => char.find((a) => parseInt(a.id) === id))
      .then((simpsons) => {
        if (simpsons) {
          resolve(simpsons)
        };
        reject(new Error('Id not found'));
      })
      .catch((err) => reject(err))
  });
  return promise;
};
