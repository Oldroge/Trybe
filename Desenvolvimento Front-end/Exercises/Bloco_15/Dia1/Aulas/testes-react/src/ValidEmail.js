import React from 'react';

/*Função para exigir a padronização do e-mail */
const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email } = props;
  return (
    <div>
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      {email ? <h3>{(verifyEmail(email) ? 'Email Valido' : 'Email Inválido')}</h3> : null}
      {verifyEmail(email) ? <h3 Style="color:green">{email}</h3> : <h3 Style="color:red">{email}</h3>}
    </div>
  );
};

export default ValidEmail;