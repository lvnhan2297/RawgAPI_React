import React, {useEffect,useState} from 'react'
// import {GENRES} from '../data/genresGlobal'
import { connect } from 'react-redux'
import {fetchGenres} from '../actions/GenresActions'
import {fetchGames} from '../actions/GamesActions'
import {Link,useLocation} from 'react-router-dom'
import { BsFillCaretDownFill } from "react-icons/bs"

const ListGenres = ({listGenres,fetchGenres,fetchGames,listGames}) => {
  
  const location = useLocation();
  const  API_URL= "https://api.rawg.io/api/genres";

  let linkCallData = `https://api.rawg.io/api${location.pathname}${location.search}`;
  let btnActive = location.search?location.search.slice(location.search.lastIndexOf('=')+1):'games'

  // gọi data game theo genres
  useEffect(() => {
    !Object.keys(listGames).includes(btnActive)&&
    fetchGames(linkCallData,btnActive)
  },[fetchGames,btnActive,linkCallData,listGames])
  
  const mapGenres = listGenres.map((item)=>
    <Link label={item.slug} key={item.id} 
    to={`games?genres=${item.slug}`}
    className={`link ${item.slug===btnActive?'link--active':''}`} 
    style={{textDecoration: 'none'}}
    >{item.name}</Link>
    )
  
  useEffect(() => {
    fetchGenres(API_URL)
  },[fetchGenres])

  const [expanded, setExpanded] = useState(false);
   const handleClick = () => {
    setExpanded(prev => !prev);
  };
  return (
    <nav className="header-genres">
      <div className="header-genres__expanded">
        <span className="header-genres__current-genre">{btnActive || 'Genre'}</span>
        <span className="header-genres__expanded-icon" onClick={handleClick}>
          <BsFillCaretDownFill
             style={{
              fontSize: '16px',
              transition: '0.2s',
              transform: `rotate(${expanded ? '180deg' : '0deg'})`
            }}
          />
        </span>
      </div>
      <div className={`header-genres__menu ${expanded ?'header-genres__menu--expanded':''}`}>
        {mapGenres}
      </div>
    </nav>
  )
}

const mapStateToProps = state =>{
  return {
    listGenres: state.collectionGenres.genres,
    loadingGenres: state.collectionGenres.loading,
    listGames: state.collectionGame
  }
}
export default connect(mapStateToProps,{fetchGenres,fetchGames})(ListGenres);
