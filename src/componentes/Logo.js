import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {

  return (
    <div>
      <Link to="/">
        <img className='logo' src="https://abisulkes.alwaysdata.net/logoAlanCamerman.png" alt="logoAlanCamerman" />
      </Link>
    </div>
  );
}

export default Logo;
