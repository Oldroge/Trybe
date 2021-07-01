/*
Dispatch an Action Event
dispatch method is what you use to dispatch actions to the Redux store. Calling store.dispatch() and passing the value returned from an action creator sends an action back to the store.

Recall that action creators return an object with a type property that specifies the action that has occurred. Then the method dispatches an action object to the Redux store. Based on the previous challenge's example, the following lines are equivalent, and both dispatch the action of type LOGIN:

store.dispatch(actionCreator());
store.dispatch({ type: 'LOGIN' });

The Redux store in the code editor has an initialized state that's an object containing a login property currently set to false. There's also an action creator called loginAction() which returns an action of type LOGIN. Dispatch the LOGIN action to the Redux store by calling the dispatch method, and pass in the action created by loginAction().
*/

// Variável store cria um local central para o armazenamento do Redux
//Redux é objeto, como todo objeto precisa chamar suas propriedades, createStore é uma delas e como o próprio nome já diz, cria o Store.
const store = Redux.createStore(
  // Criado um estado, fez a atribuição a ele com o objeto chave login, valor inicial false, retornando ele mesmo.
  (state = {
    login: false
  }) => state
);

// Criado uma função que retorna a ação de um objeto com chave type, valor 'LOGIN';
const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:
store.dispatch(loginAction());
// O dispatch está empurrando a função loginAction() para dentro da store
