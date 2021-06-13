import './App.css';
// src/App.js
import React from 'react';
import Album from './components/Album';
import Data from './components/data-album';

class App extends React.Component {
  render() {

    // Retorno do que será renderizado
    return (
      <article>
        <Album album={ Data.album01 } />
        <Album album={ Data.album02 } />
      </article>
    );
  }
}

export default App;
