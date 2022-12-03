import React from 'react';
import './App.css';
import {BrowserRouter, Route ,Routes} from 'react-router-dom'; 
import Login from './Login';
import Home from './Home';

function App() {

  return (
        <div className = "App">
          <BrowserRouter>
              <Routes>
                <Route path = '/' element = {<Home />}>  </Route>
                <Route path = '/login' element = {<Login />}>   </Route>
              </Routes>
          </BrowserRouter>
          </div>
  );
}

export default App;
