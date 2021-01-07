import React from 'react'
import {GENRES} from '../data/genresGlobal'
const HeaderGenres = () => {
  const mapGenres = GENRES.map((item,i)=>
    <span label={item.label} key={i} className="link" href="#/games?genre=indie" style={{textDecoration: 'none'}}>{item.label}</span>
    )
  return (
    <div className="header-genres__menu">
      {mapGenres}
    </div>
  )
}

export {HeaderGenres}
