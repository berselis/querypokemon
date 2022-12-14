import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setNametrainer } from '../store/slices/nameTrainer.slice';
import { setOffsetTriner } from '../store/slices/offSetTrainer.slice';
import pokeBallO from '../assets/Media/imgs/pokeballO.png';

const Home = () => {
    let offset = Math.floor(Math.random() * 1185);
    const dispachName = useDispatch();
    const dispachOffset = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value.trim();
        if (name.length > 0) {
            dispachName(setNametrainer(name, offset));
            dispachOffset(setOffsetTriner(offset))
            navigate('/pokedex');
        }
        e.target.name.value = '';
    }
    return (
        <section className='main'>

            <div className='form-trainer'>
                <div className='title-intro'>
                    <span>P</span>
                    <span>
                        <img src={pokeBallO} />
                    </span>
                    <span>K</span>
                    <span>E</span>
                    <span>D</span>
                    <span>E</span>
                    <span>X</span>
                </div>
                <h4><i>Hello!! trainer, gime your name!!</i></h4>
                <form onSubmit={handleSubmit} className='input-group'>
                    <input id='name' type="text" className='form-control form-control-lg text-danger' placeholder='writer your name here' />
                    <button type='submit' className='btn btn-danger btn-lg'>Start</button>
                </form>
            </div>
        </section>
    )
}

export default Home