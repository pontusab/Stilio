import React from 'react';
import { Link } from 'react-router';

const Home = () => (
  <div>
    <h1>Welcome home!</h1>
    <Link to="page/test-page">Test dynamic page</Link>
  </div>
);

export default Home;
