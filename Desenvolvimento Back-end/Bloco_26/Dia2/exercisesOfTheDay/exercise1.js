// Create a function that receives three parameters and return a Promise.
// - Case some of the parameters received dont be a number, reject the Promise with the reason "Only numbers!";
// - Case all the parameters be numeric, sum the two first and multiply the result by third    ( (a + b) * c );
// - Case the result be less than 50, reject the Promise with the reason "Low value."
// - Case the result be bigger than 50, resolve the Promise with the got value;
function exerciseOne(param1, param2, param3) {
  const promise = new Promise((resolve, reject) => {
    if (typeof param1 !== 'number' && param2 !== 'number' && param3 !== 'number') {
      reject(new Error("Only numbers!"));
    };

    const result = ((param1 + param2) * param3);
    if (result < 50) {
      reject(new Error("Low value."));
    }
    resolve(result);
  })
  return promise;
}
exerciseOne(40, 20, 30)
.then(resolve => console.log(resolve))
.catch(err => console.log(err));

exerciseOne(1, 2, 'a')
.then(resolve => console.log(resolve))
.catch(err => console.log(err));

// exerciseOne(1, 2, 3)
// .then(resolve => console.log(resolve))
// .catch(err => console.log(err));

// Exercise 2:
// Write a code to consume the function builded in the last exercise;
// - Generate a random number from 1 to 100 to each parameter the function receive. To generate a random number, use the follow code snippet: Math.floor(Math.random() * 100 + 1);
// - Call the exercises function previously, pass by three random numbers as parameters;
// - use then and catch to manipulate the Promise returning by function:
// case the promise been reject, write in the screen the reason;
// case the promise been resolve, display the result;

function randomNumbers() {
  return Math.floor(Math.random() * 100 + 1);
};

function arrayNumbers() {
  const array = Array.from({ length: 3 }).map(randomNumbers);
  exerciseOne(...array)
  .then(response => console.log(response))
  .catch(err => console.log(err));
};
arrayNumbers();

// Exercise 3:
// Rewrite the previous exercise to use async/await.
// Remember: The key word await only can be used inside the function;
async function exerciseThree() {
  try {
    const result = await exerciseOne(...randomNumbers);
    console.log(result);
  } catch (err) {
    console.error(err);
  };
};
exerciseThree();
