import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUser } from './features/userSlice';
import Login from './Login';

const CheckingLogin = () => {

    const user = useSelector(selectUser)
  return (
    <div> 
       { user ? <Navigate to = "/teslaccount" /> : <Login />}
    </div>
  )
}

export default CheckingLogin