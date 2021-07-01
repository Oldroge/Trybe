/*
Handle an Action in the Store
After an action is created and dispatched, the Redux store needs to know how to respond to that action. This is the job of a reducer function. Reducers in Redux are responsible for the state modifications that take place in response to actions. A reducer takes state and action as arguments, and it always returns a new state. It is important to see that this is the only role of the reducer. It has no side effects — it never calls an API endpoint and it never has any hidden surprises. The reducer is simply a pure function that takes state and action, then returns new state.

Another key principle in Redux is that state is read-only. In other words, the reducer function must always return a new copy of state and never modify state directly. Redux does not enforce state immutability, however, you are responsible for enforcing it in the code of your reducer functions. You'll practice this in later challenges.

The code editor has the previous example as well as the start of a reducer function for you. Fill in the body of the reducer function so that if it receives an action of type 'LOGIN' it returns a state object with login set to true. Otherwise, it returns the current state. Note that the current state and the dispatched action are passed to the reducer, so you can access the action's type directly with action.type.
*/

// Variavel defaultState definindo estado inicial com chave login, valor false.
const defaultState = {
  login: false
};

// Varivel reducer está atribuindo ao parametro state o defaultState e um parametro action.
const reducer = (state = defaultState, action) => {
  // Change code below this line
  // Ação está pegando o tipo do que está sendo retornado do objeto que foi empurrado para dentro da store no exercício anterior.
  // Se o tipo for igual a 'LOGIN' retornar o valor true
  if (action.type === 'LOGIN') {
    return {
      login: true,
    };
  // Se não devolve o state atual
  } else {
    return state;
  }

  // Change code above this line
};

// Variavel store salvando as alterações de reducer
const store = Redux.createStore(reducer);

// Função que retorna o 'LOGIN' para o reducer
const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
