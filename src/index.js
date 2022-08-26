import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// 1. npm install react-bootstrap bootstap
//   import bootstrap in index.js 
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

