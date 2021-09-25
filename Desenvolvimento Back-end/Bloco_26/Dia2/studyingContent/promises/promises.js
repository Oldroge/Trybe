// Treating errors as sync form:

// Unlike callbacks, treat errors with promises is a simple and easy way, besides stay readeble.
// Create a function to divide 2 numbers;
function dividirNumeros(num1, num2) {
  // In this if we throw a new error whether the second parameter were equal 0 cause numbers cant be divide by zero and this probably throw back an error;
  if (num2 == 0) throw new Error("Não pode ser feito uma divisão por zero");

  // Case everything went right, it runs this return divide the numbers;
  return num1 / num2;
}

// In this example it was been treating the error with try/catch;
try {
  // Case the response of the function run everything okay, it will run the follow line:
  const resultado = dividirNumeros(2, 1);
  // And bring a result:
  console.log(`resultado: ${resultado}`);
  // The catch will treate the error
} catch (e) {
  // And print in console the message error
  console.log(e.message);
}
// NOTICE: The error is only treated by convetion, it will never display to the user (or almost hehe). But is a good way to handle with errors;


// Treating errors as async form:
// As before is declared a function, and within the function is declared a new Promise
function dividirNumeros(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    // if this promise for some reason be reject, it run the follow line calling the reject function;
    if (num2 == 0) reject(new Error("Não pode ser feito uma divisão por zero"));

    // If everything runs fine, the resolve function will back the divide result;
    const resultado = num1 / num2;
    resolve(resultado)
  });
  // Function returning the promise when called
  return promise;
}
// Handle with the promise to divide the numbers
dividirNumeros(2, 1)
  // If everything went right, then bring the results
  .then(result => console.log(`sucesso: ${result}`))
  // Case dont, catch the error and handle display a mensage
  .catch(err => console.log(`erro: ${err.message}`));
  