/* 1. Crie uma função que receba um número e retorne seu fatorial.

- Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

- Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .
*/

function factorial(n) {
  let result = n === 0 ? 1 : n * factorial(n-1);
  return result;
}
console.log(factorial(7));

/* 2. Cri uma função que receba uma frase e retorne qual a maior palavra. */

function findLongestWord (str) {
  let phraseArray = str.split(' ');
  let longestWord = phraseArray.sort(function(a, b) {
    return a.length - b.length;
  });
  return longestWord[0];
}
console.log(findLongestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

/* 3. Crie uma página que contenha:

- Um botão ao qual será associado um event listener;

- Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;

- Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.*/

let bringTagP = document.querySelector('p');
let createButton = document.createElement('button');
let clickCount = 0;
document.body.appendChild(createButton);
createButton.textContent = 'Click';

document.addEventListener('click', () => {
  bringTagP = clickCount += 1
  return bringTagP;
})
