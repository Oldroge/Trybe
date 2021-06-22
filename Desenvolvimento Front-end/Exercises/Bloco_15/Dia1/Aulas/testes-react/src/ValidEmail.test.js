import React from 'react';
import { render } from '@testing-library/react';
import ValidEmail from './ValidEmail';
/* 
Criando teste para componente específico
*/
test('Testando um componente, caso o email seja valido.', () => {
  // Numa variável é criado um suposto e-mail para test
  const EMAIL_USER = 'email@email.com';

  // Capturamos o getByText e setamos o EMAIL_USER no ValidEmail (componente importado) de outro documento para realizar o test neste componente.
  const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
  // Criamos uma variável para capturar a mensagem Email Valido com o getByText
  const isValid = getByText('Email Valido');
  // O test espera que o IsValid apareça a mensagem Email Valido no documento
  expect(isValid).toBeInTheDocument();
});

// Criamos o teste também para verificar se o e-mail é inválido
test('Testando um componente, caso o email seja inválido.', () => {
  // Criamos uma variável simulando um e-mail inválido
  const EMAIL_USER = 'emailerrado';
  // Capturamos o getByText e setamos o EMAIL_USER com o e-mail inválido no componente ValidEmail
  const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
  // Com o isValid atribuímos o seletor getByText com a mensagem Email Inválido
  const isValid = getByText('Email Inválido');
  // Por último o teste espera que a atribuição a variável isValid esteja no documento, no caso precisa renderizar o Email Inválido.
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente caso não haja e-mail e click no botão.', () => {
  const NO_EMAIL = '';
  const { queryByText } = render(<ValidEmail email={NO_EMAIL} />)

  const noMessage = queryByText('Email Inválido');
  expect(noMessage).not.toBeInTheDocument();
})
