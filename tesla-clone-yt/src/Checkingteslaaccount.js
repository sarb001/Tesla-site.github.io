import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUser } from './features/userSlice';
import TeslaAccount from './TeslaAccount';

const Checkingteslaaccount = () => 
{
    const user = useSelector(selectUser)

  return (
    <div>
        { !user ? (<Navigate to = "/login" />) : ( <TeslaAccount />) }
    </div>
  )
}

export default Checkingteslaaccount