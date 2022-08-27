import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setNametrainer } from '../store/slices/nameTrainer.slice';
import pokeBallO from '../assets/Media/imgs/pokeballO.png';

const Home = () => {
    const dispach = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value.trim();
        if (name.length > 0) {
            dispach(setNametrainer(name));
            navigate('/pokedex');
        }
        e.target.name.value = '';
    }
    return (
        <div className='main'>

            <div className='form-trainer'>
                <div className='title-intro'>
                    <span>P</span>
                    <span>
                        <img src={pokeBallO}/>
                    </span>
                    <span>K</span>
                    <span>E</span>
                    <span>D</span>
                    <span>E</span>
                    <span>X</span>
                </div>
                <h4><i>Hello!! trainer, gime your name!!</i></h4>
                <form onSubmit={handleSubmit} className='input-group'>
                    <input id='name' type="text" className='form-control form-control-lg text-danger' placeholder='writer your name here'/>
                    <button type='submit' className='btn btn-danger btn-lg'>Start</button>
                </form>
            </div>
        </div>
    )
}

export default Home