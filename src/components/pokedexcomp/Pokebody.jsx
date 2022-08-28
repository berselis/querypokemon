import React from 'react';
import Pokecard from './Pokecard';

const Pokebody = ({ pokemons }) => {
    if (pokemons.length > 0) {
        return (
            <section className='content-card'>
                {
                    pokemons.map(pokemon =>  <Pokecard key={pokemon.url} name={pokemon.name} url={pokemon.url} />)
                }
               
            </section>
        )
    }
}

export default Pokebody