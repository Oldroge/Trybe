import React from 'react';

function click() {
  console.log('clicou!');
}

function clickOne() {
  console.log('Clicou aqui também!')
}

function clickLast() {
  console.log('Clicou aqui por último!')
}

class App extends React.Component {
  render() {
    return (
    <div>
      <button onClick={click}>CLICK</button>
      <button onClick={clickOne}>CLICK HERE TOO</button>
      <button onClick={clickLast}>LAST CLICK HERE</button>
    </div>
    )
  }
}
export default App;
