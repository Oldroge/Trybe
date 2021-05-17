// 3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

var numA = 3;
var numB = 8;
var numC = 5;

if (numA > numB && numA > numC) {
  console.log('The biggest number is', numA)
}

else if (numB > numA && numB > numC) {
  console.log('The biggest number is', numB)
}

else {
  console.log('The biggest number is', numC)
}
