import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import colorType from '../../json/colorsTypes.json';
import { getIcon } from '../../js/iconsType';
import { useNavigate, Link } from 'react-router-dom';

const Pokecard = ({ name, url }) => {
    const [pokemon, setPokemon] = useState();

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(url)
            .then(res => setPokemon(res.data))
            .catch(msj => console.log(msj))
    }, []);

    if (pokemon) {
        let type = pokemon.types[0].type.name;
        const [firstColor, secondColor] = colorType[type].split('|');
        const icons = [];
        icons.push(getIcon(type).svg);
        for (let i = 1; i < pokemon.types.length; i++) {
            icons.push(getIcon(pokemon.types[i].type.name).svg);
        }
        return (
            <Link to={`/pokedex/${pokemon.id}`}>
                <article className='poke-card' style={{ background: `linear-gradient(180deg, ${firstColor}, ${secondColor})` }}>
                    <div className='inner-card'>
                        <div className='content-image' style={{ background: `linear-gradient(180deg, ${secondColor}, ${firstColor})` }}>
                            <img src={pokemon.sprites.other['official-artwork']['front_default']} />
                        </div>
                        <div className='content-info'>
                            <h5 className='name' style={{ color: secondColor }}>{name}</h5>
                            <div className='icon-types'>
                                <ul>
                                    {
                                        icons.map(icon => <li key={icon}>
                                            <img src={icon} />

                                        </li>)
                                    }
                                </ul>
                            </div>
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
            </Link>
        )
    }
}
export default Pokecard