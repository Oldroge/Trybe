const readline = require('readline-sync');

const speed = () => {
  const dist = readline.questionInt("Which the distance? ")
  const tim = readline.questionInt("Which the time ")
  const avgSpeed = (dist / tim).toFixed(2);
  console.log(`The average speed: ${ avgSpeed } m/s`);
}
speed();
