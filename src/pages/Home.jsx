import React from 'react';
import { Link } from 'reach-router/index';

const Home = () => (
  <div>
    <Link to="/about">ABOUT</Link>
    <br />
    <Link to="/">HOME</Link>
  </div>
);

export default Home;
