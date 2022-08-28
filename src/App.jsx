import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProtectedRoutes from './components/ProtectedRoutes';
import Pokedex from './components/Pokedex';
import PokemonDetails from './components/PokemonDetails';
import { HashRouter } from 'react-router-dom';
import Pokenavbar from './components/pokedexcomp/Pokenavbar';
import Pokefooter from './components/pokedexcomp/Pokefooter';
import Pagenotfound from './components/pokedexcomp/Pagenotfound';

function App() {

  return (
    <>
      <Pokenavbar />

      <main className='container'>
        <div className='row'>
          <HashRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route element={<ProtectedRoutes />}>
                <Route path='/pokedex' element={<Pokedex />} />
                <Route path='/pokedex/:id' element={<PokemonDetails />} />
                <Route path='*' element={<Pagenotfound/>}/>
              </Route>
            </Routes>
          </HashRouter>
        </div>
      </main>

      <Pokefooter />

    </>
  )
}
export default App
