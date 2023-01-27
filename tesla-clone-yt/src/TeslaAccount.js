import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './features/UserContext';
import Header from './Header';

import './TeslaAccount.css';

const TeslaAccount = () =>  {

    const { logout  } = useAuth();
    const [ err , seterr ] = useState('');
    const navigate = useNavigate();

    const handlelogout = async (e) => 
    {
        e.preventDefault();
        try{
          await logout();
          navigate('/')
        }
        catch(err)
        {
            seterr(err.message)
        }
    }

  return (
    <div > 
        <Header /> 
        <div className="main-text" style = {{textAlign:'center'}}>
           <span style = {{fontSize:'40px',fontWeight:'500'}}> Dashboard </span>
        </div>
        <div className="teslaccount-container">
          <div className="first-side">
                  <span>  <Link to = "/teslaccount">   Dashboard  </Link>  </span>
                  <span>  <Link to = "/charging">   Charging  </Link>  </span>
                  <span>  <Link to = "/loot-box">  Loot Box      </Link>  </span>
                  <span>  <Link to = "/history">   Order History  </Link>  </span>
                  <button onClick = {handlelogout}> Sign Out </button>
          </div>
          <div className = "second-side">
               <div className="second-side-images" style = {{display:'grid' ,width:'90%',backgroundColor:'whitesmoke'}}>
                  <span> <img src= "/image-part-1.png" alt = "First-image" style = {{width:'100%',height:'30vh'}} /> </span>
                  <span> Order Tesla Solar  </span>
                  <span> Produce energy  to power your Tesla Life </span>
                  <span> <a href = "#" >   View Solar  </a> </span>
               </div>

               <div className="second-side-images" style = {{display:'grid' ,width:'90%',backgroundColor:'whitesmoke'}}>
                  <span> <img src= "/reserve-car.png" alt = "" style = {{width:'100%',height:'30vh',}} /> </span>
                  <span> Reserve a Car  </span>
                  <span> Browse our Models</span>
                  <span> <a href = "#" >   Shop Now  </a> </span>
               </div>
          </div>
        </div>
    </div>
  )
}

export default TeslaAccount