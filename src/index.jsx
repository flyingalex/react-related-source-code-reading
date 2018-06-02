import React from 'react';
import { render } from 'react-dom';
import { Router } from 'reach-router/index';
import Home from 'pages/Home';

render(
  <Router>
    <Home path="/" />
  </Router>,
  document.getElementById('app'),
);
