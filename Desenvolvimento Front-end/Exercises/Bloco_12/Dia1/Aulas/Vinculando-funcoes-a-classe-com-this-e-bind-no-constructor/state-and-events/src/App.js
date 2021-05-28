import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    /* Para definir um estado inicial ao componente, a ser definido
    no momento em que o componente for colocado na tela, faça uma atribuição
    de um objeto à chave `state` do `this`, ou seja, ao `this.state`*/
    this.state = {
      numeroDeCliques: 0,
      outroClick: 0
    }
    console.log(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    /* Você **NUNCA** deve fazer atribuições diretamente a `this.state`. Deve,
    ao invés disso, SEMPRE utilizar a função `this.setState(novoEstado)` do
    React*/
    this.setState((beforeState, _props) => ({
      numeroDeCliques: beforeState.numeroDeCliques + 1
    }))
  }

  anotherClick = () => {
    this.setState((firstState, _props) => ({
      outroClick: firstState.outroClick + 1
    }))
  }

  render() {
    /*Para LER o estado, você pode usar `this.state.chaveDoMeuEstado`*/
    return (
    <div>
      <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
      <button onClick={this.anotherClick}>{this.state.outroClick}</button>
    </div>
    )
  }
}

export default App;