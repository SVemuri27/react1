import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
import About from './pages/AboutPage';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<Aboutpage />} />
        {/* <Route path="/react1" element={<React1 />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
