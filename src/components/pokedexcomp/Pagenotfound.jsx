import React from 'react';
import { useNavigate } from 'react-router-dom';

const Pagenotfound = () => {
    const navigate = useNavigate();

    const handlerback = () => navigate('/pokedex')
    return (
        <div>
            <h1>Not found!!</h1>
            <button onClick={handlerback} type='buttom' className='btn btn-dark btn-lg m30'>Back...</button>
        </div>
    )
}

export default Pagenotfound