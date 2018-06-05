import React from 'react-dev/react';
import { render } from 'react-dev/react-dom';
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
