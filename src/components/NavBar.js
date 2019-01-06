import React from 'react';

import me from '../assets/icons/me.jpg';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <header className="nav--bar">
    <div className="nav--bar__left">
      <div className="nav--menu__icon" role="button">
        <svg focusable="false" viewBox="0 0 24 24">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
        </svg>
      </div>
      <div className="app--name__wrap">
        <p className="app--name">fluid contacts</p>
      </div>
    </div>
    <div className="nav--bar__middle">
      <form action="/" className="nav--bar__form">
        <input type="search" name="nav--bar__search-input" className="nav--bar__search-input" id="nav--bar__search-input" placeholder="search" />
        <button className="nav--bar__search-icon">
          <svg focusable="false"  height="24px"
                viewBox="0 0 24 24"
                width="24px"
                xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            />
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </button>
      </form>
    </div>
    <div className="nav--bar__right">
      <div className="user--profile-img">
        <img src="https://robohash.org/GPR.png?set=set1&size=150x150" alt="user profile img" />
      </div>
    </div>
  </header>
  )
}

export default NavBar;