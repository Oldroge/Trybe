const readline = require('readline-sync');



const calculateImc = () => {
  const height = readline.questionInt('Which your height? ');
  const weight = readline.questionFloat('Which you weight? ');
  console.log(`Your height is ${ height } and your weight is ${ weight }`);
  const imc = (weight / Math.pow(height / 100, 2)).toFixed(2);
  console.log(imc);
}
calculateImc();
