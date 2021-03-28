import React from "react";
import ReactDOM from "react-dom";

const name = "Parul Aggarwal";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

ReactDOM.render(
  <>
    <h1> My name is {name} </h1>
    <p> Current date is {currDate}</p>
    <p> Current time is {currTime}</p>
  </>,
  document.getElementById('root')
);


