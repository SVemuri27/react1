// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home'; // Ensure this matches the exported name
import User from './User '; // Ensure there are no extra spaces

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> {/* Change to point to root */}
        <Link to="/user/1">User  1</Link>
        <Link to="/user/2">User  2</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Use Home here */}
        <Route path="/user/:id" element={<User  />} />
      </Routes>
    </Router>
  );
};

export default App;