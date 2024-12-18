import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import About from './pages/About';
import { Link } from 'react-router-dom';
import DataFetchingComponent from './components/DataFetchingComponent.jsx';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/data-fetching">Data Fetching</Link> {/* Add a link to the new route */}
      </nav>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/data-fetching" element={<DataFetchingComponent />} /> {/* Add the new route */}
      </Routes>
    </Router>
  );
}

export default App;
