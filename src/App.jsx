import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import About from './pages/About';
import './App.css';
import Nav from './components/Nav';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
