import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className='nav-wrapper blue darken-1'>
          <Link to='/' className='brand-logo left'>
            ROCXET
          </Link>
          <ul id='nav-mobile' className='right'>
            <li>
              <Link to='/attack'>Attack</Link>
            </li>
            <li>
              <Link to='/result'>Result</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
