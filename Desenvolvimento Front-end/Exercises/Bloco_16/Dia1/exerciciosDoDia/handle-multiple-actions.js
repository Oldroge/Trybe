/*
You can tell the Redux store how to handle multiple action types. Say you are managing user authentication in your Redux store. You want to have a state representation for when users are logged in and when they are logged out. You represent this with a single state object with the property authenticated. You also need action creators that create actions corresponding to user login and user logout, along with the action objects themselves.

The code editor has a store, actions, and action creators set up for you. Fill in the reducer function to handle multiple authentication actions. Use a JavaScript switch statement in the reducer to respond to different action events. This is a standard pattern in writing Redux reducers. The switch statement should switch over action.type and return the appropriate authentication state.

Note: At this point, don't worry about state immutability, since it is small and simple in this example. For each action, you can return a new object — for example, {authenticated: true}. Also, don't forget to write a default case in your switch statement that returns the current state. This is important because once your app has multiple reducers, they are all run any time an action dispatch is made, even when the action isn't related to that reducer. In such a case, you want to make sure that you return the current state.
*/

// Variável que cria estado inicial do objeto
const defaultState = {
  authenticated: false
};

// Reducer que definirá qual o próximo estado, atribuindo o defaultState() ao parâmetro state. Esta variável espera receber uma action também.
const authReducer = (state = defaultState, action) => {
  // Change code below this line
  // com o switch case podemos verificar o tipo da ação
  switch (action.type) {
    // Caso LOGIN, retorna a chave authenticated com valor true
    case 'LOGIN':
    return {
      authenticated: true,
    };
    
    // Caso LOGOUT, retorna a chave authenticated com valor false
    case 'LOGOUT':
    return {
      authenticated: false,
    }
    // Caso nenhuma das condições acima seja verdadeira, retorna o estado inicial
    default:
    return state;
  }
  // Change code above this line
};

// Variável store que vai receber as auterações do reducer
const store = Redux.createStore(authReducer);

// As actions que vão ser injetadas no redux
const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
