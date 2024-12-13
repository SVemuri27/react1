import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './app.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import navbar from "./components/navbar";
import home from './pages';
import about from './pages/about';
 


function app() {
  return (
  <BrowserRouter>
  <navbar />
  <Routes>
    <Route path="/" element={<home />} /> 
           <Route path="/about" element={<about />} />
          </Routes>
          </BrowserRouter>
          );
          }
          

export default app;
