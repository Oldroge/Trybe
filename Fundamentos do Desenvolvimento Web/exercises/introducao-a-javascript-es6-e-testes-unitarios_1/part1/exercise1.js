function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);

/* Agora você vai fazer alguns exercícios de fixação.

1. Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.

- Modifique a estrutura da função para que ela seja uma arrow function. */
const testingScopeFunction = escopo => {
  const ifScopo = (escopo === true) ? `Ótimo, fui utilizada no escopo!` : `Não devo ser utilizada fora do meu escopo (if)`;
  console.log(ifScopo)

  const elseScopo = (escopo === true) ? `:D` : `O que estou fazendo aqui? :O`
  console.log(elseScopo)
}
testingScopeFunction(true);

/* - Modifique as concatenações para template literals . */      


      // const oddsAndEvens = [13, 3, 4, 10, 7, 2];

      // // Seu código aqui.

      // console.log(oddsAndEvens);
