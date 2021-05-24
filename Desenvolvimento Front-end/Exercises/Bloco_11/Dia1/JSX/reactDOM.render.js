import React from 'react';
import './App.css';

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.querySelector('#root'));
}
setInterval(tick, 1000);

export default tick
