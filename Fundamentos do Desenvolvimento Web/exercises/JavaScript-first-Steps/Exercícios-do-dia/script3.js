/*3. Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.*/

let a = 5;
let b = 4;
let c = 3;
if (a > b && a > c) {
  console.log('Variable A is bigger = ' + a);
} else if (b > a && b > c) {
  console.log('Variable B is bigger = ' + b);
} else {
  console.log('Variable C is bigger = ' + c);
}