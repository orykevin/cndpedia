import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import icon from "../img/catdog-ico.svg"
function navbar() {

  return (

  <div className='nav'>
      <img src={icon} alt="" />
      <h1>CNDPedia</h1>
      <FontAwesomeIcon icon={faBars} className='nav-icon'/>
  </div>
  );
}

export default navbar;
