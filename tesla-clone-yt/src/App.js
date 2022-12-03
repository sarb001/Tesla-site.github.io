import React from 'react';
import './App.css';
import { BrowserRouter, Route ,Routes } from 'react-router-dom'; 
import Home from './Home';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import CheckingLogin from './CheckingLogin';
import Signup from './Signup';

function App() {

  return (
        <div className = "App">
          <BrowserRouter>
              <Routes>
                <Route path = '/'      element = {<Home />}>  </Route>
                <Route path = '/login' element = {<CheckingLogin />}> </Route>
                <Route path = '/signup' element = {<Signup />}>   </Route>
              </Routes>
          </BrowserRouter>
          </div>
  );
}

export default App;
