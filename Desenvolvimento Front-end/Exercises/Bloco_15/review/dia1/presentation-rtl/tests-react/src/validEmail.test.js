import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './validEmail';

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Valido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});

test('Testando se o componente fica com o texto verde com o e-mail correto.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={EMAIL_USER} />)
  const isGreen = screen.getByTestId('id-valid-email')
  expect(isGreen).toHaveAttribute('class', 'green-text')
})
