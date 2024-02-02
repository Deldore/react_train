import React, { useState } from 'react';
import s from './Header.module.css'

const Header = () => {
    const [collapseState, setCollapseState] = useState(false);
    // console.log(collapseState);
    return (
      <nav className={`${s.navbar} row`}>
        <div className={`col-lg-2 col-12 ${s['logo-block']}`}>
          <div className={`btn ${s.menuButton}`} onClick={() => setCollapseState(!collapseState)}>≡</div>
          <div className={s.logo}></div>
        </div>
        <div className={`col-lg-9 col-12 ${s['nav-collapse-class']} ${collapseState ? s.opened : ""}`}>
          <div className={s['navbar-collapse']}>
            <a href='#' className={`${s['nav-link']} ${s['animatedLink']}`}>Sites</a>
            <a href='#' className={`${s['nav-link']} ${s['animatedLink']}`}>Telegram Bots</a>
            <a href='#' className={`${s['nav-link']} ${s['animatedLink']}`}>Price List</a>
            <a href='#' className={`${s['nav-link']} ${s['animatedLink']}`}>Portfolio</a>
            <a href='#' className={`${s['nav-link']} btn ${s.contact_us}`}>Contact us</a>
          </div>
        </div>
      </nav>
    );
 
  }

export default Header;