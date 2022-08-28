import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import useGetAllType from '../hooks/useGetAllType';
import PokeFinder from './pokedexcomp/PokeFinder';
import PokePaginations from './pokedexcomp/PokePaginations';
import Pokebody from './pokedexcomp/Pokebody';



const Pokedex = () => {
  const offset = Math.floor(Math.random() * 1200);

  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`);
  const [pokemons, setPokemons] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage] = useState(4);


  let types = [];
  types = useGetAllType();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    e.target.pokename.value = '';
  }

  useEffect(() => {
    axios.get(url)
      .then(res => setPokemons(res.data.results))
      .catch(msj => console.log(msj))
  }, [url]);

  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;
  const currentPokemonCard = pokemons.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (e) => {
    [...e.target.parentElement.childNodes].forEach(li => {
      li.className = 'numb'
    });
    e.target.className = 'numb active';
    setCurrentPage(parseInt(e.target.innerText));
  }

  return (
    <>

      <PokeFinder handleSubmit={handleSubmit} types={types} />

      <PokePaginations cardPerPage={cardPerPage} totalCards={pokemons.length} paginate={paginate} />

      <Pokebody pokemons={currentPokemonCard} />

    </>
  )
}

export default Pokedex