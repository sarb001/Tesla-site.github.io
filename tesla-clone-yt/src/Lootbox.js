import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const Lootbox = () => {
  return (
    <div> 
    <Header />

    <div className="main-text" style = {{textAlign:'center'}}>
         <span style = {{fontSize:'40px',fontWeight:'500'}}> LootBox </span>
      </div>
      <div className="teslaccount-container">
        <div className="first-side">
                <span>  <Link to = "/teslaccount">  Dashboard  </Link>  </span>
                <span>  <Link to = "/charging">   Charging       </Link>  </span>
                <span>  <Link to = "/loot-box">  Loot Box      </Link>  </span>
                <span>  <Link to = "/history">   Order History  </Link>  </span>
                <span>  <Link to = "/signout">    Sign Out      </Link>  </span>
        </div>
        <div className = "second-side-charge">
             <div className="second-side-images" >
                <span> When friends and family order through your referral link, 
                    you will each earn Credits that can be redeemed for Tesla awards. 
                    View eligible products, track referrals, and redeem your Credits in the Loot Box 
                    section of the Tesla app.
                  </span>
                 <span>  
                     Your referral link will be available upon delivery of your car or installation of your solar system. 
                     Learn More  
                 </span>
             </div>
        </div>
      </div>
    </div>
  )
}

export default Lootbox