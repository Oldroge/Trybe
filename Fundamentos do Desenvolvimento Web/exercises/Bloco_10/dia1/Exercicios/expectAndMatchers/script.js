const arr = [1, 2 ,3];
const obj = { a: 1, b: 2, c: 3};
const n = null;
const z = 0;
const multiplyByTwo = (number) => {
  if (!number) {
    throw new Error('number é indefinido')
  }
  return number * 2;
};


// const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
// const weekDays = ['Sunday', ...workDays, 'Saturday'];

// module.exports = {
//   arr,
//   obj,
//   n,
//   z,
//   multiplyByTwo,
//   workDays,
//   weekDays
// }
