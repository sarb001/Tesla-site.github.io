import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route ,Routes } from 'react-router-dom'; 
import Home from './Home';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from './features/userSlice';
import CheckingLogin from './CheckingLogin';
import Signup from './Signup';
import Checkingteslaaccount from './Checkingteslaaccount';
import { onAuthStateChanged } from 'firebase/auth';
import  auth  from './Firebase';

function App() {

   const user = useSelector(selectUser);
   const dispatch = useDispatch()

      useEffect(() => 
      {
        auth.onAuthStateChanged(userAuth => {
          if(userAuth){
            dispatch(
              login({
                email: userAuth.email,
                uid:   userAuth.uid,
                displayName : userAuth.displayName,
            })
            )
          }else {
            // dispatch(logout())
          }
        })
      }, [dispatch])

  return (
        <div className = "App">
          <BrowserRouter>
              <Routes>
                <Route path = '/'      element = {<Home />}>  </Route>
                <Route path = '/login' element = {<CheckingLogin />}> </Route>
                <Route path = '/signup' element = {<Signup />}>   </Route>
                <Route path = '/teslaccount' element = {<Checkingteslaaccount />}>   </Route>
              </Routes>
          </BrowserRouter>
          </div>
  );
}

export default App;
