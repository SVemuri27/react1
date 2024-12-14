import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
import About from './pages/AboutPage';
import Home from './pages/Homepage';
// import Home from './pages/Home';

// import React1 from './pages/React1';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/react1" element={<React1 />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
