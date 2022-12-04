import React from 'react'
import './Headerblock.css';
import { Link } from 'react-router-dom';
import './Headerblock.css';


const Headerblock3 = () => {
  return (
    <>
                <div className = 'headerblock3'> 
                <div className = "headerblock_info">
                    <div className = "headerblock_infotext">
                        <span id = "model-roof-name"> Solar Roof  </span>
                        <Link className = 'drive-link3'> Produce Clean Energy From  your Roof </Link>
                    </div>
                    <div className="headerblock_actions">
                        <button className = "headerblock_buttonprimary">    Order Now   </button>
                        <button className = "headerblock_buttonsecondary">  Learn More </button>
                    </div>
                </div>        
            </div>
    </>
  )
}

export default Headerblock3