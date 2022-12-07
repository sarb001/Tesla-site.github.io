import React from 'react'
import { Link } from 'react-router-dom';
import './Headerblock.css';

const Headerblock = () => {

  return (
    <>
      <div className = 'headerblock'> 
          <div className = "headerblock_info">
              <div className = "headerblock_infotext">
                  <span id = "model-S-name"> Model S  </span>
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

export default Headerblock