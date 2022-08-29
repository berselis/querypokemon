import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import colorType from '../json/colorsTypes.json';
import { getIcon } from '../js/iconsType';
import pokemonLetter from '../assets/Media/imgs/pokemonword.png';
import weightIcon from '../assets/Media/imgs/weight.png';
import heightIcon from '../assets/Media/imgs/height.png';
import hp from '../assets/Media/imgs/stats/hp.png';
import attack from '../assets/Media/imgs/stats/attack.png';
import defense from '../assets/Media/imgs/stats/defense.png';
import spAttack from '../assets/Media/imgs/stats/attackSpecial.png';
import spDefense from '../assets/Media/imgs/stats/defenseSpecial.png';
import speed from '../assets/Media/imgs/stats/speed.png';


const PokemonDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    axios.get(url)
      .then(res => {
        setPokemon(res.data);
      }).catch(msj => console.log(msj));

  }, []);


  const handlerBack = () => navigate('/pokedex');


  if (pokemon) {
    let type = pokemon.types[0].type.name;
    const [firstColor, secondColor] = colorType[type].split('|');
    const icons = [];
    icons.push({ 'image': getIcon(type).png, 'text': type });

    for (let i = 1; i < pokemon.types.length; i++) {
      icons.push({ 'image': getIcon(pokemon.types[i].type.name).png, 'text': pokemon.types[i].type.name });
    }

    return (
      <>
        <div className='row'>
          <div className='col-md-12 col-sm-12 col-xs-12 pokemon-tittle'>
            <img className='img-fluid mx-auto d-block' src={pokemonLetter} />
          </div>
        </div>
        <article className='pokemon-detail'>
          <button onClick={handlerBack} type="button" className="btn btn-outline-light btn-lg btn-back" style={{ color: secondColor }}>
            Back
            <i className="bi bi-arrow-return-left"></i>
          </button>

          <h1 className='name-pokemon' style={{ color: secondColor }}><strong> {pokemon.name}</strong></h1>
          <div className='pokemon-layout'>
            <div className='banner-type' style={{ background: `linear-gradient(180deg, ${firstColor}, ${secondColor})` }}></div>
            <div className='row'>

              <div className='col-md-6'>
                <div className='pokemon-header'>
                  <div className='pokemon-data'>

                    <img src={pokemon.sprites.other['official-artwork']['front_default']} />

                    <div className='variant-sprites'>
                      <img src={pokemon.sprites.versions['generation-v']['black-white'].animated['back_default']} />
                      <img src={pokemon.sprites.versions['generation-v']['black-white'].animated['front_default']} />
                      <img src={pokemon.sprites.versions['generation-v']['black-white'].animated['back_shiny']} />
                      <img src={pokemon.sprites.versions['generation-v']['black-white'].animated['front_shiny']} />

                    </div>

                    <div className='pokemon-status'>
                      <hr style={{ color: secondColor }} />

                      <h1 className='weight' style={{ border: `2px solid ${secondColor}` }}>
                        <img src={weightIcon} />
                        <strong>{pokemon.weight}</strong>
                        <small>Weight</small>
                      </h1>

                      <h1 className='number-position' style={{ border: `2px solid ${secondColor}` }}>
                        <strong style={{ color: secondColor }}>#{pokemon.order}</strong>
                      </h1>

                      <h1 className='height' style={{ border: `2px solid ${secondColor}` }}>
                        <img src={heightIcon} />
                        <strong>{pokemon.height}</strong>
                        <small>Height</small>
                      </h1>

                    </div>
                  </div>
                  <div className='icon-type-detail'>
                    <ul>
                      {
                        icons.map(icon => {
                          return <li key={icon.image}>
                            <img src={icon.image} />
                            <label>{icon.text}</label>
                          </li>
                        })

                      }

                    </ul>
                  </div>
                </div>
              </div>

              <div className='col-md-6'>
                <div className='layout-stats'>
                  <hr />
                  <h2 className='title-stats'>Stats</h2>
                  <div className='stats'>
                    <div>
                      <small>HP</small>
                      <h3 style={{ color: secondColor }}>
                        <img src={hp} />
                        <strong>{pokemon.stats[0]['base_stat']}</strong>
                      </h3>
                    </div>
                    <div>
                      <small>ATTACK</small>
                      <h3 style={{ color: secondColor }}>
                        <img src={attack} />
                        <strong>{pokemon.stats[1]['base_stat']}</strong>
                      </h3>
                    </div>
                    <div>
                      <small>DEFENSE</small>
                      <h3 style={{ color: secondColor }}>
                        <img src={defense} />
                        <strong>{pokemon.stats[2]['base_stat']}</strong>
                      </h3>
                    </div>
                    <div>
                      <small>SP ATTACK</small>
                      <h3 style={{ color: secondColor }}>
                        <img src={spAttack} />
                        <strong>{pokemon.stats[3]['base_stat']}</strong>
                      </h3>
                    </div>
                    <div>
                      <small>SP DEFENSE</small>
                      <h3 style={{ color: secondColor }}>
                        <img src={spDefense} />
                        <strong>{pokemon.stats[4]['base_stat']}</strong>
                      </h3>
                    </div>
                    <div>
                      <small>SPEED</small>
                      <h3 style={{ color: secondColor }}>
                        <img src={speed} />
                        <strong>{pokemon.stats[5]['base_stat']}</strong>
                      </h3>
                    </div>
                  </div>
                </div>

                <div className='layout-stats'>
                  <hr />
                  <h2 className='title-stats'>Abilities</h2>
                  <img className='img-fluid abilities-img' src={pokemon.sprites.versions['generation-vi']['x-y']['front_default']} />

                  <ul className='abilities'>
                    {
                      pokemon.abilities.map(ab => <li key={ab.ability.name} style={{ border: `1px solid ${secondColor}` }}>{ab.ability.name}</li>)
                    }
                  </ul>
                </div>

                <div className='layout-stats'>
                  <hr />
                  <h2 className='title-stats'>Moves</h2>
                  <img className='img-fluid moves-img' src={pokemon.sprites.versions['generation-vi']['x-y']['front_shiny']} />

                  <div className='body-moves'>
                    <ul className='moves'>
                      {
                        pokemon.moves.map(mo => <li key={mo.move.name} style={{ color: secondColor }}>{mo.move.name}</li>)
                      }

                    </ul>
                  </div>

                </div>
              </div>

              <div className='col-md-12 variant' style={{ boxShadow: `inset 0px -51px 16px -20px ${secondColor}` }}>
                <hr />
                <h2>Variant</h2>
                <div className='body-variant'>
                  <img className='img-fluid' src={pokemon.sprites.other['dream_world']['front_default']} />
                  <img className='img-fluid' src={pokemon.sprites.other.home['front_default']} />
                  <img className='img-fluid' src={pokemon.sprites.other.home['front_shiny']} />
                </div>
              </div>


            </div>
          </div>
        </article>
      </>
    )
  }



}

export default PokemonDetails