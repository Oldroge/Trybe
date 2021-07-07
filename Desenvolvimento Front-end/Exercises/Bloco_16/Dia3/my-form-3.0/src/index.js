import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <provider store={ store }>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </provider>,
  document.getElementById('root')
);
