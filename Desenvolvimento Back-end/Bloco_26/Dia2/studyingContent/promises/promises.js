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