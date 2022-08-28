import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    axios.get(url)
      .then(res => {
        console.log(res.data)
        setPokemon(res.data);
      }).catch(msj => console.log(msj));

  }, []);


  const handlerBack = () => navigate('/pokedex');


  if (pokemon) {
    return (
      <article className='pokemon-detail'>
        <h1>PokemonDetails {id}</h1>
      </article>
    )
  }



}

export default PokemonDetails