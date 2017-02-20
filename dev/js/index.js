import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import Landing from './Landing';
import '../scss/App.scss';

let title = "Break My Fast!"
ReactDOM.render(
  <Nav name={title}/>,
  document.getElementById('navbar-container')
);
ReactDOM.render(
  <Landing name={title}/>,
  document.getElementById('landing-container')
);