import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>react + redux starter with examples</h1>
    <Link to="/">home</Link>
    &nbsp;
    <Link to="/test">test</Link>
    &nbsp;
    <Link to="/reduxTest">ReduxTest</Link>
  </header>
);

export default Header;