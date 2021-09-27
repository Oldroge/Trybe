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

exerciseOne(1, 2, 3)
.then(resolve => console.log(resolve))
.catch(err => console.log(err));
