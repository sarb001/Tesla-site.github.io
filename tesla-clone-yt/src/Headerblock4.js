import React from 'react'
import './Headerblock.css';
import { Link } from 'react-router-dom';
import './Headerblock.css';

const Headerblock4 = () => {
  return (
    <>
                <div className = 'headerblock4'> 
                <div className = "headerblock_info">
                    <div className = "headerblock_infotext">
                        <span id = "model-panel-name"> Solar Panel  </span>
                        <Link className = 'drive-link4'> Lowest Cost Solar Panels in America  </Link>
                    </div>
                    <div className="headerblock_actions">
                        <button className = "headerblock_buttonprimary">    Order Now  </button>
                        <button className = "headerblock_buttonsecondary">   Learn More  </button>
                    </div>
                </div>        
            </div>
    </>
  )
}

export default Headerblock4