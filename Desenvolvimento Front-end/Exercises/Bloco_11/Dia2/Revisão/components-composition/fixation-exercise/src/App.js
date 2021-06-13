// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import Order from './Components/Order';
import Product from './Components/Data'

/*Componente pai que recebe e renderiza as informações dos componentes filhos */
class App extends React.Component {
  render() {

    return (
      <div className="App">
        <h1> Orders recently created </h1>
         <Order order={Product.headphone} />
         <Order order={Product.energyDrink} />
      </div>
    );
  }
}

export default App;
