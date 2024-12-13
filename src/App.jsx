
import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './components/NavbarComponents';
import HomePage from './pages/HomePage';
import About from './pages/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
