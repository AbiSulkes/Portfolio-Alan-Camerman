import React from 'react';
import Grilla from './Grilla';
import "./Branding.css";
import FondoCielo from './FondoCielo';

const Branding = () => {
  return (
    <div>
      <div className='contBranding'>
        <img className="gifBranding" src="https://abisulkes.alwaysdata.net/My%20Video.gif" alt="ImagenGif2" />
      </div >
      
      <Grilla />
     
      <FondoCielo />
    </div >
  );
}

export default Branding;