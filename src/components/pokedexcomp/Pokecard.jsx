import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import colorType from '../../json/colorsTypes.json';
import {useNavigate} from 'react-router-dom';

const Pokecard = ({ name, url }) => {
    const [pokemon, setPokemon] = useState();

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(url)
            .then(res => setPokemon(res.data))
            .catch(msj => console.log(msj))
    }, []);

    const handlerClick = (e) =>{
        const id = e.target.getAttribute('data-id');
        
        navigate(`/pokedex/${id}`);
    }


    if (pokemon) {
        let type = pokemon.types[0].type.name;
        const [firstColor, secondColor] = colorType[type].split('|');
        for (let i = 1; i < pokemon.types.length; i++) {
            type += ` / ${pokemon.types[i].type.name}`
        }
        return (
            <article className='poke-card' style={{ background: `linear-gradient(180deg, ${firstColor}, ${secondColor})` }}>
                <div onClick={handlerClick} data-id={pokemon.id} className='body-card-event'></div>
                <div className='inner-card'>
                    <div className='content-image' style={{ background: `linear-gradient(180deg, ${secondColor}, ${firstColor})` }}>
                        <img src={pokemon.sprites.other['official-artwork']['front_default']} />
                    </div>

                    <div className='content-info'>
                        <h5 className='name' style={{ color: secondColor }}>{name}</h5>
                        <h6>{type}</h6>
                        <small><strong>Type</strong></small>
                        <hr />
                        <div className='stats'>
                            <div>
                                <small>HP</small>
                                <h3 style={{ color: secondColor }}><strong>{pokemon.stats[0]['base_stat']}</strong></h3>
                            </div>
                            <div>
                                <small>ATTACK</small>
                                <h3 style={{ color: secondColor }}><strong>{pokemon.stats[1]['base_stat']}</strong></h3>
                            </div>
                            <div>
                                <small>DEFENSE</small>
                                <h3 style={{ color: secondColor }}><strong>{pokemon.stats[2]['base_stat']}</strong></h3>
                            </div>
                            <div>
                                <small>SPEED</small>
                                <h3 style={{ color: secondColor }}><strong>{pokemon.stats[5]['base_stat']}</strong></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        )

    }


}

export default Pokecard