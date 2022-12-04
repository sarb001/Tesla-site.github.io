import React from 'react'
import './Headerblock.css';
import { Link } from 'react-router-dom';


const Headerblock2 = () => {
  return (
    <>
                <div className = 'headerblock2'> 
                <div className = "headerblock_info">
                    <div className = "headerblock_infotext">
                        <span id = "model-X-name"> Model X  </span>
                        <Link className = 'drive-link'> Schedule a Test Drive </Link>
                    </div>
                    <div className="headerblock_actions">
                        <button className = "headerblock_buttonprimary">    Custom Order  </button>
                        <button className = "headerblock_buttonsecondary">  Existing Inventory  </button>
                    </div>
                </div>        
            </div>
    </>
  )
}

export default Headerblock2