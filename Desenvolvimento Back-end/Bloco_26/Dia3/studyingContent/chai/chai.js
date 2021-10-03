// The chai helps how to test our assertions, in other words, it provides the tools that use to say how and what want to test, so it validate if the results match with the expected;

// An example using only javascript code:
const respostaCenario1 = calculaSituacao(4);
if (respostaCenario1 === 'reprovado') {
  console.log(`Ok 🚀`);
} else {
  console.error('Resposta não esperada 🚨');
}
// Here aren't being used the chai yet, is only a example to display how is the equivalent, but test with pure javascript is not consistent, gets verbose and repetitive;

// The code bellow is equivalent the code above but using chai:
// Call a function to be tested into a variable:
const resposta = calculaSituacao(4);
// Using the method expect to indicate which variable will to be tested, after, which is the answer expected:
expect(resposta).equals('reprovado');
