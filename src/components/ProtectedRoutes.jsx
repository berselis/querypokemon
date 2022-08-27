import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import trainerIcon from '../assets/Media/imgs/trainer.png';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setNametrainer } from '../store/slices/nameTrainer.slice';

const ProtectedRoutes = () => {
  const nameTrainer = useSelector(state => state.nameTrainer);
  const dispach = useDispatch();
  const navigate = useNavigate();

  const handledGoOut = () => {
    dispach(setNametrainer(''));
    navigate('/');

  }

  if (nameTrainer) {
    return (
      <>
        <div className='go-out'>
          <a onClick={handledGoOut}>
            <img src={trainerIcon} />
            <strong>{nameTrainer}</strong>
            <label>Go-Out</label>
          </a>
        </div>
        <Outlet />
      </>

    )
  } else {
    return <Navigate to='/' />
  }
}

export default ProtectedRoutes