import React from 'react';
import './App.css';
import { BrowserRouter, Route ,Routes } from 'react-router-dom'; 
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import { FirstProvider } from './features/UserContext'; 
import TeslaAccount from './TeslaAccount';
import Model from './Models/Model';
import Model3 from './Models/Model3';
import Modelx from './Models/Modelx';
import Modely from './Models/Modely';
import Solarroof from './Models/Solarroof';
import Solarpanel from './Models/Solarpanel';
import Charging from './Charging';
import Lootbox from './Lootbox';
import History from './History';

function App() {

  return (
        <div className = "App">
          <BrowserRouter>
            <FirstProvider>
                <Routes>
                  <Route path = '/'        element = {<Home />}>   </Route>
                  <Route path = '/teslaccount'  element = {<TeslaAccount />}>   </Route>
                  <Route path = '/login'   element = {<Login />}>  </Route>
                  <Route path = '/signup'  element = {<Signup />}>  </Route>

                  {/* for Models */}

                  <Route path = '/model'         element = {<Model />}>  </Route>
                  <Route path = '/model-3'       element = {<Model3 />}>  </Route>
                  <Route path = '/model-x'       element = {<Modelx />}>  </Route>
                  <Route path = '/model-y'       element = {<Modely />}>  </Route>
                  <Route path = '/solar-roof'    element = {<Solarroof />}>  </Route>
                  <Route path = '/solar-panel'   element = {<Solarpanel />}>  </Route>

                  {/*  After logging in Page */}

                  <Route path = '/charging'   element = {<Charging />}>  </Route>
                  <Route path = '/loot-box'   element = {<Lootbox  />}>  </Route>
                  <Route path = '/history'   element  = {<History  />}>  </Route>
                  {/* <Route path = '/signout'   element = {<Solarpanel />}>  </Route> */}


                </Routes>
           </FirstProvider>
          </BrowserRouter>
          </div>
  );
}

export default App;
