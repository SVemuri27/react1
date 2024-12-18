// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import User from './User '; // Ensure this import is correct

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/user/1">User  1</Link>
        <Link to="/user/2">User  2</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User  />} />
      </Routes>
    </Router>
  );
};

export default App;