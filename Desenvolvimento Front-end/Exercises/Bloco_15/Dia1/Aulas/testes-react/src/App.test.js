import { render, fireEvent } from '@testing-library/react';
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
NUM PRIMEIRO MOMENTO******
Neste test ele só funcionaria se constasse apenas um botão sendo renderizado no arquivo, pois o getByRole só faz uma verificação.
Fazendo o test com dois botões do arquivo sendo renderizado, o test quebra, pois ele encontra 2 botões e espera apenas 1.
*/

/*
NUM SEGUNDO MOMENTO ******
Foi visto com o código anterior (comentado) não conseguimos realizar o test com dois botões ou o test acaba quebrando. Colocando a propriedade data-testid nos botões conseguimos referenciar um dos botões no teste.
*/
test('Verificar se existe um botão de enviar', () => {
  // Buscar elemento
  // const { getByRole } = render(<App />);
  const { getByTestId } = render(<App />);
  // const button = getByRole(/button/i);
  const btnSend = getByTestId('id-send');


  // Renderiza
  expect(btnSend).toBeInTheDocument();
  expect(btnSend.type).toBe('button');
  expect(btnSend).toHaveValue('Enviar');

  // expect(button).toBeInTheDocument();
  // expect(button.type).toBe('button');
})

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

/*
Simulando test para comportamentos
*/
test('Verificando se o botão e o campo email estão funcionando', () => {
  // Buscar elementos
  const { getByTestId, getByLabelText } = render(<App />)

  // Criar variável de suposto comportamento do usuário
  const EMAIL_USER = 'email@email.com.br';

  // Criar variável para a propriedade Test-id
  const textEmail = getByTestId('id-email-user');

  // Teste espera que ela apareça no documento
  expect(textEmail).toBeInTheDocument();

  // Teste espera que a propriedade tenha um conteúdo de texto Valor:
  expect(textEmail).toHaveTextContent('Valor:');

  // Buscar botão, através de variável, pela propriedade test-id
  const btnSend = getByTestId('id-send');

  // Buscar input, através de variável, pela label que contenha um texto de valor Email
  const inputEmail = getByLabelText('Email');

  /*
  FireEvent espera um comportamento de evento, por exemplo: Um click, uma caracter, algo que mude o estado do documento.
  */

  // Aqui o fireEvent simula a variável de EMAIl_USER criado no início do test para ver o estado altera digitando o suposto email
  fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });

  // FireEvent clica no botão
  fireEvent.click(btnSend);

  // fireEvent verificar se clicando no Botão o valur do inputEmail fica em branco
  expect(inputEmail).toHaveValue('');

  // fireEvent verifica se após clicar no botão o conteúdo de textEmail apareça com o valor de EMAIL_USER
  expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
})

