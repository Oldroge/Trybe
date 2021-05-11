/*5. Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. */
angA = 100;
angB = -3;
angC = 40;

if (angA + angB + angC === 180) {
  console.log(true);
} else if (angA < 0 || angB < 0 || angC < 0) {
  console.log('Erro!');
} else {
  console.log(false)
}
