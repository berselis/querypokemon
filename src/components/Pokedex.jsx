import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import useGetAllType from '../hooks/useGetAllType';
import PokeFinder from './pokedexcomp/PokeFinder';
import PokePaginations from './pokedexcomp/PokePaginations';
import Pokebody from './pokedexcomp/Pokebody';



const Pokedex = () => {
  let offset = Math.floor(Math.random() * 1200);

  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=100`);
  const [pokemons, setPokemons] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage] = useState(4);


  let types = [];
  types = useGetAllType();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.pokename.value.trim();
    if (name.length > 0) {
      setUrl(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    }
    e.target.pokename.value = '';
  }

  const handleRealod = () => {
    offset = Math.floor(Math.random() * 1200);
    setUrl(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=100`);
  }
  const handleType = (e) => {
    const option = e.target.options[e.target.options.selectedIndex];
    if (option.value) {
      setUrl(`https://pokeapi.co/api/v2/type/${option.value}/`)
    }
  }

  useEffect(() => {
    axios.get(url)
      .then(res => {
        setCurrentPage(1);
        let array = [];
        if (res.data.results) {
          setPokemons(res.data.results);
          return;
        }

        if (res.data.pokemon) {
          res.data.pokemon.forEach(poke => array.push(poke.pokemon))
          setPokemons(array);
          return;
        }

        const pokemon = {
          'name': res.data.name,
          'url': `https://pokeapi.co/api/v2/pokemon/${res.data.id}/`
        }
        array.push(pokemon);
        setPokemons(array);

      })
      .catch(msj => console.log(msj))
  }, [url]);

  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;
  const currentPokemonCard = pokemons.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (e) => {
    [...e.target.parentElement.childNodes].forEach(li => li.className = 'numb');
    e.target.className = 'numb active';
    setCurrentPage(parseInt(e.target.innerText));
  }

  return (
    <>

      <PokeFinder handleSubmit={handleSubmit} types={types} handleReaload={handleRealod} handleType={handleType} />

      <PokePaginations cardPerPage={cardPerPage} totalCards={pokemons.length} paginate={paginate} />

      <Pokebody pokemons={currentPokemonCard} />

    </>
  )
}

export default Pokedex