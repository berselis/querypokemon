import React from 'react';
import pokeBall from '../../assets/Media/imgs/pokeball.png';

const Pokefooter = () => {
    return (
        <footer className='footer-pokedex'>

            <div className='footer-inner-up'> </div>
            <div className='footer-inner-middle'>
                <div className='pokeball-layout'>
                    <img src={pokeBall} />
                    <span className='gow-icon'></span>
                </div>

            </div>


            <div className='footer-inner-down'> </div>

        </footer>
    )
}

export default Pokefooter