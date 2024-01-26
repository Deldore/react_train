import React from 'react';

const Header = () => {
    return (
      <nav className='navbar row'>
        <div className='col-5 logo-block'>
          <div id='logo'></div>
        </div>
        <div className='col-4'>
          <div className='navbar-collapse'>
            <a href='#' className='nav-link'>Sites</a>
            <a href='#' className='nav-link'>Telegram Bots</a>
            <a href='#' className='nav-link'>Price List</a>
            <a href='#' className='nav-link'>Portfolio</a>
            <a href='#' className='nav-link btn' id='contact_us'>Contact us</a>
          </div>
        </div>
      </nav>
    );
}

export default Header;