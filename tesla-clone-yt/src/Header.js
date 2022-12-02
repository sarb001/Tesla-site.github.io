import React from 'react';
import './features/Header.css';
import { Link } from 'react-router-dom';
import { TfiMenu } from 'react-icons/tfi';
import { MdCancel } from 'react-icons/md';

import './Header.css';

const Header = ({ismenuopen, setismenuopen}) => {
  return (
    <div className='header'> 
            <div className = "header-logo">
                <Link to = "/">
                     <img src = "/tesla logoblack.png"  alt = ""  className='header_logoimg'/>
                </Link>
            </div>

            <div className="header_links">
                <Link to = "/"> Model S  </Link>
                <Link to = "/"> Model 3  </Link>
                <Link to = "/"> Model X  </Link>
                <Link to = "/"> Model Y  </Link>
                <Link to = "/">  Solar Roof  </Link>
                <Link to = "/">  Solar Panel </Link>
            </div>

           <div className="header_right">
              <Link to = "/"> Shop </Link>
              <br/>
              <Link to = "/login"> Tesla Account </Link>
              <div className="header_menu" onClick={() => setismenuopen(!ismenuopen)}>
                {ismenuopen ? <MdCancel /> :  <TfiMenu /> }
                 
              </div>
           </div>

</div>
  )}


export default Header