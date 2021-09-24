const readline = require('readline-sync');

const logResults = (number, answer) => {
  if (answer === number) {
    return console.log("Congrats! Right number!")
  };
  return console.log(`Oh! Try again, the number were: ${number}`)
}

const drawLots = () => {
  const randomNum = (Math.ceil(Math.random() * 10));
  console.log("Try to guess witch number I'm thinking...")

  const number = readline.questionInt('Type a number between 0 and 10? ')

  logResults(randomNum, number)

const playAgain = readline.question('Try again? [Yes/Not] ').toUpperCase()[0]

if (playAgain === "Y") {
  drawLots();
} else {
  console.log("Okay! Bye! :D")
}
};
drawLots();
