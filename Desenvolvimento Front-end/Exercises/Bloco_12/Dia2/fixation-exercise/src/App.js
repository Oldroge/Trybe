import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: ''
    }

  }

  handleChange({ target }) {
    const { name } = target.value;
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
            name="go"
            value={this.state.go}
            onChange={this.handleChange}
          />
          <input 
            type="number"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <label>
            <textarea 
              name='estado' 
              // value={this.state.estadoFavorito} 
              onChange={this.handleChange} 
            />
          </label>
        </form>
      </div>
    )
  }
}

export default App;
