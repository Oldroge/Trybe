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

  handleChange(event) {
    this.setState({
      estadoFavorito: event.target.value
    })
  }

  render() {
    return(
      <div>
        <h1>First forms in React! :D</h1>
        <form>
          <select></select>
          <input 
            type="checkbox"
            name="Go"
          />
          <input 
            type="number"
            name="Age"
          />
          <label>
            <textarea 
              name='estado' 
              value={this.state.estadoFavorito} 
              onChange={this.handleChange} 
            />
          </label>
        </form>
      </div>
    )
  }
}

export default App;
