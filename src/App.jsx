import reactLogo from './assets/react.svg';
import bdevelopmentLogo from './assets/Media/imgs/logoWhite.png';
import bootstrapLogo from './assets/bootstrap-logo-shadow.png';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';





function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);

  }



  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={reactLogo} alt="" className="d-inline-block align-text-top react-logo" />
            <img src={bootstrapLogo} alt="" className="d-inline-block align-text-top bootstrap-logo" />
            <h3><strong>Entregrable 5</strong> - Berselis J. Mendoza M.</h3>
          </a>
          <img src={bdevelopmentLogo} alt="BJMM" className='bdevelopment-logo' />
        </div>
      </nav>
      <div className='container'>
        <div className='row'>

          <HashRouter>
            <Routes>
              <Route path='/' element={<Home handleSubmit={handleSubmit} />} />


            </Routes>
          </HashRouter>
        </div>
      </div>
    </>
  )
}

export default App
