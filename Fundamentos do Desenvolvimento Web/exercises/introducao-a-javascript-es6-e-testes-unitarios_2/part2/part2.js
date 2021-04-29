const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/* 1. Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
*/

function changeTheMorning(obj, key, value) {
  const accessObj = Object.assign({}, obj);
  accessObj[key] = value;
  console.log(accessObj)
}
changeTheMorning(lesson2, 'Turno', 'Manhã')

console.log('========================================')

/* 2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro. */
console.log('========================================')


function listTheKeys(obj) {
  const keyLessons = Object.entries(obj);
  for(index in keyLessons) {
    console.log(keyLessons[index][0]);
  }
}
console.log('A lista de chaves são:')
listTheKeys(lesson1);

console.log('========================================')
console.log('========================================')

/* 3. Crie uma função para mostrar o tamanho de um objeto. */
const objectLength = (obj) => Object.entries(obj).length;
console.log(`O tamanho deste objeto é: ${objectLength(lesson2)}`);

/* 4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro. */
console.log('========================================')
console.log('========================================')

function listValues(obj) {
  const valueLesson = Object.entries(obj);
  for (index in valueLesson) {
    console.log(valueLesson[index][1]);
  }
}
console.log('A lista de valores são:')
listValues(lesson2);
