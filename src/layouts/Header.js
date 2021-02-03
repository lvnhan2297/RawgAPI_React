import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';

const Header = () => {
const history = useHistory();
const handleChange = (e) => {
  history.push({
    pathname: '/games',
    search: `?search=${e.target.value}`
  })
}

  return (
    <>
      <header className="header">
        <h1 className="header__logo"><Link to="/games" style={{textDecoration: 'none'}}>RAWG</Link></h1>
        <div className="search-bar">
          <button className="search-bar__button">
            <FaSearch className="search-bar__icon" />
          </button>
          <input type="text" className="search-bar__input" onChange={handleChange} placeholder="Search for name" />
        </div>
        <Link className="btn u-uppercase" to="/login" style={{marginRight: '1rem', textDecoration: 'none'}}>Login</Link>
        <Link className="btn u-uppercase" to="/register" style={{textDecoration: 'none'}}>Sign up</Link>
      </header>
    </>
  )
}

export {Header}
