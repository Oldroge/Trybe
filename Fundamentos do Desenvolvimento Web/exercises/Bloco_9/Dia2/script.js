// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(xablau => xablau.json())
    // .then(data => console.log(data))
    .then(data => document.getElementById('jokeContainer').innerText = data.joke
    );
};
window.onload = () => fetchJoke();

  const fetchPromise = () => {
    const newPromise = new Promise((resolve, reject) => {

      const arrayNumbers = Array.from(
        { length: 10 },
        () => Math.floor(Math.random() * 51)
      );

      const sum = arrayNumbers.map(randomNumber => randomNumber * randomNumber)
      .reduce((sum, number) => sum + number);

      if (sum < 8000) {
        return resolve();
      }
      return reject();

    });
    newPromise
      .then(() => console.log('Foi'))
      .catch(() => console.log('Não foi'))
};

fetchPromise();