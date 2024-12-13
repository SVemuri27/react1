import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from './pages';
import About from './pages/about';
 


function App() {
  return (
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} /> 
           <Route path="/about" element={<About />} />
          </Routes>
          </BrowserRouter>
          );
          }
          

export default App;
