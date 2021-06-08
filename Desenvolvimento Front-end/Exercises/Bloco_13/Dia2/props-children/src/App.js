import React from 'react';
import ComponentePai from './ComponentePai';

/*Componente filho retornando um único valor para o pai */
class App extends React.Component {
  render() {
    return (
      <div className='main'>
        <ComponentePai>
          <p>SUPIMPA</p>
        </ComponentePai>
      </div>
    )
  }
}

export default App;
