import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const name = "Parul";

ReactDOM.render(
  <>
  <h1>Using JSX Expressions </h1>,
  <h3>My name is {name}</h3>,
  <p>My lucky number is {5+2}</p>,
  </>,
  document.getElementById('root')
);


