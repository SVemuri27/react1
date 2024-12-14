import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import About from './pages/About';
// import React1 from './pages/React1';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/react1" element={<React1 />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
