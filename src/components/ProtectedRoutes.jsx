import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setNametrainer } from '../store/slices/nameTrainer.slice';
import LogOut from './LogOut';

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
        <LogOut handledGoOut={handledGoOut} nameTrainer={nameTrainer} />
        <Outlet />
      </>

    )
  } else {
    return <Navigate to='/' />
  }
}

export default ProtectedRoutes