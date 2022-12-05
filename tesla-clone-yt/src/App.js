import React from 'react';
import './App.css';
import { BrowserRouter, Route ,Routes } from 'react-router-dom'; 
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import { FirstProvider } from './features/UserContext';

function App() {

  return (
        <div className = "App">
          <BrowserRouter>
            <FirstProvider>
                <Routes>
                  <Route path = '/'        element = {<Home />}>  </Route>
                  <Route path = '/login'   element = {<Login />}>  </Route>
                  <Route path = '/signup'  element = {<Signup />}>  </Route>
                </Routes>
           </FirstProvider>
          </BrowserRouter>
          </div>
  );
}

export default App;
