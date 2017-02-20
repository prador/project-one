import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/App.scss';

let title = "BreakFast man!"
ReactDOM.render(
  <Nav name={title}/>,
  document.getElementById('navbar-container')
);
ReactDOM.render(
  <Menu />,
  document.getElementById('menu-container')
);