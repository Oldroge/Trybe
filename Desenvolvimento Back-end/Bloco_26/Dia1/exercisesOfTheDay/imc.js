const readline = require('readline-sync');

const calculateImc = () => {
  const height = readline.questionInt('Which your height? ');
  const weight = readline.questionFloat('Which you weight? ');
  console.log(`Your height is ${ height } and your weight is ${ weight }`);
  const imc = (weight / Math.pow(height / 100, 2)).toFixed(2);
  
    if (imc < 18.5) {
      console.log("Situação: Abaixo do peso (magreza)");
      return;
    };
    if (imc > 18.5 && imc < 24.9) {
      console.log("Situação: Peso normal");
      return;
    };
    if (imc > 25 && imc < 29.9) {
      console.log("Situação: Acima do peso (sobrepeso)");
      return;
    }
    if (imc > 30 && imc < 34.9) {
      console.log("Situação: Obesidade grau I");
      return;
    }
    if (imc > 35 && imc < 39.9) {
      console.log("Situação: Obesidade grau II");
      return;
    };
  console.log("Obesidade graus III e IV ");
};
calculateImc();
