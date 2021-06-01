import React from 'react';
import './App.css';

class TextArea extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <form>
        <label>
          <textarea 
            name="estadoFavorito" 
            // value={this.state.estadoFavorito}
            value={value}
            onChange={handleChange} 
              />
        </label>
      </form>
  )
}
}

export default TextArea;
