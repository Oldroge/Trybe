import React from 'react';

class App extends React.Component {
  constructor() {
    super()
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this)
    console.log('Clicou!')
  }

  render() {
    /* No React, precisamos dizer explicitamente que queremos uma função da nossa classe
    através da sintaxe `this.minhaFuncao` para usá-la num evento */
    return <button type="button" onClick={this.handleClick}>Meu botão</button>;
  }
}

export default App;
