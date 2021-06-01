import React from 'react';
import TextArea from './TextArea';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      name: '',
      email: '',
      idade: 0,
      vai: false,
      palavraChave: ''
    }

  }

  handleChange({ target }) {
    const { name } = target.value.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return(
      <div>
        <h1>First forms in React! :D</h1>
        <form>
          <select></select>
          <input 
            type="checkbox"
            name="vai"
            value={this.state.vai}
            onChange={this.handleChange}
          />
          <input 
            type="number"
            name="idade"
            value={this.state.idade}
            onChange={this.handleChange}
          />
          <TextArea value={this.state.estadoFavorito} handleChange={this.handleChange} />
          
        </form>
      </div>
    )
  }
}

export default App;
