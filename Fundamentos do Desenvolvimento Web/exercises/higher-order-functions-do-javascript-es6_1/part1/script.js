/* 1. Crie uma função de primeira classe que retorna um objeto { nomeCompleto, email } de uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respctivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .
*/
function newEmail(name) {
  return {name, email: `${name.replace(' ', '').toLowerCase()}@trybe,com`};
 }

const newEmployees = () => {
  const employees = {
    id1: newEmail('Pedro Guerra'),
    id2: newEmail('Luiza Drumond'),
    id3: newEmail('Carla Paiva'),
}
  return employees;
};
console.log(newEmployees());

/* 2. Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
*/

const randomNumbers = () => Math.ceil(Math.random() * 5);
console.log(randomNumbers());

function sortedNumber(num, random) {
  if (num === random) {
    return 'Parabéns, você ganhou!'
  }
  return 'Tente novamente! ):'
}
console.log(sortedNumber(4, randomNumbers()));
