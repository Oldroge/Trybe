/*
Use const for Action Types
A common practice when working with Redux is to assign action types as read-only constants, then reference these constants wherever they are used. You can refactor the code you're working with to write the action types as const declarations.

Declare LOGIN and LOGOUT as const values and assign them to the strings 'LOGIN' and 'LOGOUT', respectively. Then, edit the authReducer() and the action creators to reference these constants instead of string values.

Note: It's generally a convention to write constants in all uppercase, and this is standard practice in Redux as well.
*/

// Neste exercício foi apenas refatorado as variáveis de leitura.
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

// Estado inicial da autenticação com chave authenticated iniciando com valor false
const defaultState = {
  authenticated: false
};

// criado o reducer com os parametros state e action, para o parâmetro state se atribui o estado inicial padrão para ter como referencia por onde deve começar o redux
const authReducer = (state = defaultState, action) => {
// Com switch case criamos a condiçao para a ação
  switch (action.type) {
    // Caso ação seja LOGIN, authenticated retorna true
    case LOGIN: 
      return {
        authenticated: true
      }
      // Caso ação seja LOGOUT, authenticated retorna false
    case LOGOUT: 
      return {
        authenticated: false
      }
      // Caso nenhuma das condições acima seja verdadeira retorna o estado padrão da linha 16.
    default:
      return state;

  }

};

// Variável que armazena o store, não pode ser feito a alteração direta no store
const store = Redux.createStore(authReducer);

// Funções de ação que são injetadas no reducer.
const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};
