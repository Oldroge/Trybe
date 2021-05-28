import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Constructor from './constructor';
import This from './this';
import ThisProblem from './this-problem';
import RightConstructor from './right-constructor';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Constructor />
    <RightConstructor />
    <This />
    <ThisProblem />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
