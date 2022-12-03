import React from 'react'
import { Link } from 'react-router-dom';
import './TeslaAccount.css';

const TeslaAccount = () => {
  return (
    <div className='teslaAccount'>
            <h2> Here in the Tesla Account Bro  </h2>
         <div className="teslaAccount_header">
             <div className="teslaAccount_logo">
                <Link>
                 <img src = ""  alt = "" />
                </Link>
             </div>
             <div className="teslaAccount_links">
                 <Link to = ""> Model S </Link>
                 <Link to = ""> Model 3 </Link>
                 <Link to = ""> Model X </Link>
                 <Link to = ""> Model Y </Link>
                 <Link> Log out </Link>
             </div>
         </div>
        TeslaAccount
    </div>
  )
}

export default TeslaAccount