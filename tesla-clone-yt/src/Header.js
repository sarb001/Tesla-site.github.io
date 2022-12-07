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

            <div className = "header_links">
                <Link to = "/model">    Model S  </Link>
                <Link to = "/model-3">  Model 3  </Link>
                <Link to = "/model-x">  Model X  </Link> 
                <Link to = "/model-y">  Model Y  </Link>
                <Link to = "/solar-roof">  Solar Roof  </Link>
                <Link to = "/solar-panel">  Solar Panel </Link>
            </div>

           <div className="header_right">
              <Link to = "/"      className = {ismenuopen &&  'header-link-hidden'}> Shop </Link>
              <Link to = "/login" className = {ismenuopen &&  'header-link-hidden'}> Tesla Account </Link>

              <div className = "header_menu"  onClick = {() => setismenuopen(!ismenuopen)}>
                {ismenuopen ? <MdCancel id = "cancel-logo" /> :  <TfiMenu  id = "menu-logo"  /> }
              </div>
           </div>

</div>
  )}


export default Header