import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name = "Parul Aggarwal";
const img1 = "Parul Aggarwal";
const img2 = "Parul Aggarwal";
const img3 = "Parul Aggarwal";


ReactDOM.render(
  <>
    <h1 className="heading" >JSX Attributes and CSS Styling</h1>
    <h4 id="name">My name is {name}</h4>
    <div className="img_div">
      <img src="https://picsum.photos/200/300" alt="Random image" />
      <img src="https://picsum.photos/250/300" alt="Random image" />
      <img src="https://picsum.photos/300/300" alt="Random image" />
    </div>
  </>,
  document.getElementById('root')
);


