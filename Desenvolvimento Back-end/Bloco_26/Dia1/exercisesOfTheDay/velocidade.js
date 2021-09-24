const readline = require('readline-sync');

const speed = () => {
  const dist = readline.questionInt("Which the distance? ")
  const tim = readline.questionInt("Which the time ")
  console.log(`The speed were: ${ dist / tim }`);
}
speed();
