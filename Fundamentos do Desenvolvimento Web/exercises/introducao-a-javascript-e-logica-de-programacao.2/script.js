let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/**1. Nesse primeiro exercício, percorra o array imprimido todos os valores nele contidos com a função console.log() */

// for (let count in numbers) {
//   console.log(numbers[count]);
// }

/**2. Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado */

//  let = total = 0;
//  for (let sum in numbers) {
//    total += numbers[sum];
//  }
//  console.log(total)

/**3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array */

// let counter = 0;
// let total = 0;
// for (let average in numbers) {
//   total += numbers[average];
//   counter = average;  
// }
// console.log(total / counter);

/**4. Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20" */

let counter =  0;
let total = 0;
for (let average in numbers) {
  total += numbers[average];
  counter = average;
}
let divide = total / counter;
console.log(divide);
if (divide > 20) {
  console.log('Valor maior que 20')
} else {
  console.log('Valor menor ou ingual a 20')
}
