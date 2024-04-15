import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Blue from './components/Blue';
import Red from './components/Red';
import Home from './components/Home';

function App() {
  return (
    <>
     <div id="container">
      
      <div id="navbar">
        <Link to="/blue" className="logo">Blue</Link>
        <Link to="/red" className="logo">Red</Link>
      </div>
      
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<Blue/>} />
          <Route path="/red" element={<Red/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
      
    </div>
    </>
  )
}

export default App
