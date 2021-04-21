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

let counter = 0;
let total = 0;
for (let average in numbers) {
  total += numbers[average];
  counter = average;  
}
console.log(total / counter);

