import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import colorType from '../json/colorsTypes.json';

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
    let type = pokemon.types[0].type.name;
    const [firstColor, secondColor] = colorType[type].split('|');
    for (let i = 1; i < pokemon.types.length; i++) {
      type += ` / ${pokemon.types[i].type.name}`
    }



    return (
      <article className='pokemon-detail'>
        <button onClick={handlerBack} type="button" className="btn btn-outline-light btn-lg btn-back" style={{ color: secondColor }}>
          Back
          <i className="bi bi-arrow-return-left"></i>
        </button>

        <h1 className='name-pokemon' style={{ color: secondColor }}><strong> {pokemon.name} {id}</strong></h1>
        <div className='pokemon-layout'>
          <div className='banner-type' style={{ background: `linear-gradient(180deg, ${firstColor}, ${secondColor})` }}></div>
          <div className='row'>

            <div className='pokemon-img'>
              <img src={pokemon.sprites.other['official-artwork']['front_default']} />
            </div>


          </div>

        </div>

      </article>
    )
  }



}

export default PokemonDetails