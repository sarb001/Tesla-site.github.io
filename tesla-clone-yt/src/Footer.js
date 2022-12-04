import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css';


const Footer = () => {
  return ( 
    <div className='footer-part'> 
         <Link> Tesla@2022  </Link>
         <Link> Privacy & Legal </Link>
         <Link> Contact </Link>
         <Link> Carrers </Link>
         <Link> News  </Link>
         <Link> Locations </Link>
    </div>
  )
}

export default Footer