// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homepage from './Home'; // Ensure this matches the exported nameimport User from './User '; // Ensure there are no extra spaces

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/Home">Home</Link>
        <Link to="/user/1">User  1</Link>
        <Link to="/user/2">User  2</Link>
      </nav>
      <Routes>
        <Route path="/Home/:id" element={<Homepage />} /> {/* Use Homepage here */}
        <Route path="/user/:id" element={<User  />} />
      </Routes>
    </Router>
  );
};

export default App;