import React from 'react'
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <>
      <header className="header">
        <h1 className="header__logo"><a href="#/games" style={{textDecoration: 'none'}}>RAWGC</a></h1>
        <div className="search-bar">
          <button className="search-bar__button">
            <FaSearch className="search-bar__icon" />
          </button>
          <input type="text" className="search-bar__input" placeholder="Search for name" />
        </div>
        <a className="btn u-uppercase" href="#/login" style={{marginRight: '1rem', textDecoration: 'none'}}>Login</a>
        <a className="btn u-uppercase" href="#/signup" style={{textDecoration: 'none'}}>Sign up</a>
      </header>
    </>
  )
}

export {Header}
