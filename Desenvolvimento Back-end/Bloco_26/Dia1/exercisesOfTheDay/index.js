const readline = require('readline-sync');

const scripts = [
  { name: 'Calculate IMC', script: './imc.js' },
  { name: 'Average speed', script: './velocidade.js' },
  { name: 'Sort a random number', script: './sorteio.js' }
];

let mensage = scripts
.map((script, index) => `${index + 1} - ${script.name}`);

mensage.unshift('Choose a number to execute corresponding script');

const chooseScript = readline.questionInt(mensage.join('\n'));

const script = scripts[chooseScript]
if (!script) {
  return console.log('Invalid number, bye!')
};
require(script.script);




