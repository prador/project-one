import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import Board from './Board';
import '../scss/App.scss';

ReactDOM.render(
  <Nav />,
  document.getElementById('navbar-container')
);
ReactDOM.render(
  <Board count={20} />,
  document.getElementById('react-container')
);
