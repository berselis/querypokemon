import React from 'react';
import trainerIcon from '../assets/Media/imgs/trainer.png';

const LogOut = ({ handledGoOut, nameTrainer }) => {
    return (
        <div className='go-out'>
            <a onClick={handledGoOut}>
                <img src={trainerIcon} />
                <strong>{nameTrainer}</strong>
                <label>Go-Out</label>
            </a>
        </div>
    )
}

export default LogOut