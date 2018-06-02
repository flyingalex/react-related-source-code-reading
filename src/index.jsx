import React from 'react';
import { render } from 'react-dom';
import { Router } from 'reach-router/index';
import Home from 'pages/Home';
import About from 'pages/About';

render(
  <Router>
    <Home path="/" />
    <About path="/about" />
  </Router>,
  document.getElementById('app'),
);
