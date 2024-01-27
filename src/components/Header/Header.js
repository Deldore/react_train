import React from 'react';
import s from './Header.module.css'

var collapseOpened = false;

function collapseState() {
  if(collapseOpened) {
    collapseOpened = false
    collapseClose();
  } else {
    collapseOpened = true
    collapseOpen();
  }
}

const collapseOpen = () => {
  document.getElementById(s['nav-collapse']).style.display = 'block';
}

const collapseClose = () => {
  document.getElementById(s['nav-collapse']).style.display = 'none';
}

const Header = () => {

    return (
      <nav className={`${s.navbar} row`}>
        <div className={`col-lg-2 col-12 ${s['logo-block']}`}>
          <div className='btn' id={s.menuButton} onClick={function(){
            collapseState();
          }}>≡</div>
          <div id={s.logo}></div>
        </div>
        <div className='col-lg-9 col-12' id={s['nav-collapse']}>
          <div className={s['navbar-collapse']}>
            <a href='#' className={s['nav-link']}>Sites</a>
            <a href='#' className={s['nav-link']}>Telegram Bots</a>
            <a href='#' className={s['nav-link']}>Price List</a>
            <a href='#' className={s['nav-link']}>Portfolio</a>
            <a href='#' className={`${s['nav-link']} btn`} id={s.contact_us}>Contact us</a>
          </div>
        </div>
      </nav>
    );
 
  }

export default Header;