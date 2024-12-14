import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Nav from './components/Nav'; 
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
