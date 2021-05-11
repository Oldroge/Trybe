// 5 - Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let ang1 = -20;
let ang2 = 60;
let ang3 = 60;

if (ang1 < 0 || ang1 == 0 || ang2 < 0 || ang2 == 0 || ang3 < 0 || ang3 == 0) {
  console.log('Error!')
}

else if (ang1 + ang2 + ang3 == 180) {
  console.log('True')
}

else {
  console.log('False')
}
