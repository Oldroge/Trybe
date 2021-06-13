// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import UserProfile from './components/UserProfile';
import Profile from './components/data-profile';

/*Componente pai no qual renderiza os componentes filhos */

class App extends React.Component {
  render() {

    return (
      <div className="App">
        <UserProfile user={Profile.joao} />
        <UserProfile user={Profile.amelia} />
      </div>
    );
  }
}

export default App;
