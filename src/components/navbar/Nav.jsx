// Nav.jsx
import React from 'react';
import {Link} form "react-router-dom"
export const Nav = () => {
  return (
  <nav>
  <ul>
  <li>
  <Link to="/about">About</Link>
  </li>
  <li><Link to="/contact">services</Link>
  </li>
  </ul>
  </nav>
  );
};

export default Nav;
