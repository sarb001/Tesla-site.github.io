import React from 'react'
import Menuitem from './Menuitem';
import './Menu.css';

const Menu = () => {
  return (
    <div className = 'menu' >
        <Menuitem title = 'existing inventory' />
        <Menuitem title = 'used inventory' />
        <Menuitem title = 'trade-in' />
        <Menuitem title = 'cybertruck' />
        <Menuitem title = 'roadster' />
        <Menuitem title = 'semi' />
        <Menuitem title = 'charging' />
        <Menuitem title = 'powerwall' />
        <Menuitem title = 'test drive' />
        <Menuitem title = 'find us' />
        <Menuitem title = 'support' />
        <Menuitem title = 'united states' />
    </div>
  )
}

export default Menu