import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/lendsqr.png';
import ImgLogo from '../images/Union.png';

const NavBar = () => {
  return (
    <div>
        <Link to='/' className='' >
          <div className="logo">
                  <img src={ImgLogo} alt="" />
                  <img src={Logo} alt="" />
              </div>
        </Link>
    </div>
  )
}

export default NavBar