/*
Register a Store Listener
Another method you have access to on the Redux store object is store.subscribe(). This allows you to subscribe listener functions to the store, which are called whenever an action is dispatched against the store. One simple use for this method is to subscribe a function to your store that simply logs a message every time an action is received and the store is updated.

Write a callback function that increments the global variable count every time the store receives an action, and pass this function in to the store.subscribe() method. You'll see that store.dispatch() is called three times in a row, each time directly passing in an action object. Watch the console output between the action dispatches to see the updates take place.
*/

// Variável de leitura
const ADD = 'ADD';

// Reducer que está fazendo a contade, inicial com o state = 0
const reducer = (state = 0, action) => {
  // Switch recebendo a ação de tipo
  switch(action.type) {
    // Caso seja ADD, return o state atual + 1
    case ADD:
      return state + 1;
      // Caso não seja nada, retorna o  state atual
    default:
      return state;
  }
};

// Variável criando o store central
const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// Change code below this line
// Calback para contagem, usa a variável global para contar
function add() {
  return count += 1;
}
// Faz a alteração no estado quando utilizado a função
store.subscribe(add);
// Change code above this line

// Cada vez que o count sofre uma alteração, atualiza o estado
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
