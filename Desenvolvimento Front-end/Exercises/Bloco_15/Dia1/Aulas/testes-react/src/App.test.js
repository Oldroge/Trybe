import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // PRIMEIRO PASSO - PEGAR O COMPONENTE

  // Como o label não possui um texto, não podemos utilizar o getByText, porém ele possui uma label com um texto, por isso utilizamos o getByLabelText
  const { getByLabelText } = render(<App />);
  // Declaramos uma varíavel para poder pegar qual Label Text queremos no nosso teste, pode utilizar expressões regulares.
  const inputEmail = getByLabelText(/email/i);

  //SEGUNDO PASSO - RENDERIZAR

  // Precisamos informar ao teste que esperamos que o input Email esteja sendo renderizado no documento, por isto utilizamos a função toBeInTheDocument().
  expect(inputEmail).toBeInTheDocument();
  // Precisamos também informar ao test o type que se espera do inputEmail para fazer com que os testes sejam mais assertivos.
  expect(inputEmail.type).toBe('email');
});


/*
Neste test ele só funcionaria se constasse apenas um botão sendo renderizado no arquivo, pois o getByRole só faz uma verificação.
Fazendo o test com dois botões do arquivo sendo renderizado, o test quebra, pois ele encontra 2 botões e espera apenas 1.
*/
// test('Verificar se existe um botão', () => 
//   // Buscar elemento
//   const { getByRole } = render(<App />);
//   const button = getByRole(/button/i);

//   // Renderiza
//   expect(button).toBeInTheDocument();
//   expect(button.type).toBe('button');
// })

/**Devido a isso precisão utilizamos outro seletor, getAllByRole */
test('Verificando se existe dois botões', () => {
  const { getAllByRole } = render(<App />);
  const buttons = getAllByRole(/button/i);

  /*
  Neste caso não utilizamos o toBeInTheDocument().
  Se repararmos, no teste abaixo ele já espera receber 2 botões, no fim ele já espera que esteja os dois botões no documento. 
  */
  expect(buttons.length).toBe(2);

  /* */
})

