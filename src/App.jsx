import reactLogo from './assets/react.svg';
import bdevelopmentLogo from './assets/Media/imgs/logoWhite.png';
import pokeBall from './assets/Media/imgs/pokeball.png';
import bootstrapLogo from './assets/bootstrap-logo-shadow.png';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProtectedRoutes from './components/ProtectedRoutes';
import Pokedex from './components/Pokedex';
import PokemonDetails from './components/PokemonDetails';
import { HashRouter } from 'react-router-dom';





function App() {

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
              <Route path='/' element={<Home />} />
              <Route element={<ProtectedRoutes />}>
                <Route path='/pokedex' element={<Pokedex />} />
                <Route path='/pokemex/:id' element={<PokemonDetails />} />
              </Route>
            </Routes>
          </HashRouter>
        </div>
      </div>

      <div className='footer-pokedex'>

        <div className='footer-inner-up'> </div>
        <div className='footer-inner-middle'>
          <div className='pokeball-layout'>
            <img src={pokeBall} />
            <span className='gow-icon'></span>
          </div>

        </div>


        <div className='footer-inner-down'> </div>

      </div>
    </>
  )
}

export default App
