import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const Charging = () => {
  return (
    <div> 
      <Header />

      <div className="main-text" style = {{textAlign:'center'}}>
           <span style = {{fontSize:'40px',fontWeight:'500'}}> Charging </span>
        </div>
        <div className="teslaccount-container">
          <div className="first-side">
                  <span>  <Link to = "/teslaccount">  Dashboard  </Link>  </span>
                  <span>  <Link to = "/charging">   Charging       </Link>  </span>
                  <span>  <Link to = "/loot-box">  Loot Box      </Link>  </span>
                  <span>  <Link to = "/history">   Order History  </Link>  </span>
                  <span>  <Link to = "/">    Sign Out      </Link>  </span>
          </div>
          <div className = "second-side-charge">
               <div className="second-side-images" >
                  <span> Charging sessions  will appear here once they are available  </span>
               </div>
          </div>
        </div>
    </div>
  )
}

export default Charging