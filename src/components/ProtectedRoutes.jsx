import React from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setNametrainer } from '../store/slices/nameTrainer.slice';
import { setOffsetTriner } from '../store/slices/offSetTrainer.slice';
import LogOut from './LogOut';

const ProtectedRoutes = () => {
  const nameTrainer = useSelector(state => state.nameTrainer);

  const dispachName = useDispatch();
  const dispachOffset = useDispatch();
  const navigate = useNavigate();

  const handledGoOut = () => {
    dispachName(setNametrainer(''));
    dispachOffset(setOffsetTriner(0));
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