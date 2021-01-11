import React, {useState,useEffect} from 'react'
// import {GENRES} from '../data/genresGlobal'
import { connect } from 'react-redux'
import {fetchGenres} from '../actions/GenresActions'
import {fetchGames} from '../actions/GamesActions'
const HeaderGenres = ({listGenres,fetchGenres,fetchGames}) => {
  const  API_URL= "https://api.rawg.io/api/genres";
  const [clickCall, setClickCall] = useState('');
  const [btnActive, setbtnActive] = useState('');

  const dataGamesByGenre = (e) => {
    setbtnActive(e.target.getAttribute("label"))
    setClickCall(e.target.getAttribute("href"));
  }
  // gọi data game theo genres
  useEffect(() => {
    if(clickCall!==''){
    const typeCall = 'call_by_genre'
    fetchGames(clickCall,typeCall)
    }
  },[fetchGames,clickCall])
  
  const mapGenres = listGenres.map((item)=>
    <span label={item.slug} key={item.id} className={`link ${item.slug===btnActive?'link--active':''}`} onClick={dataGamesByGenre} href={`https://api.rawg.io/api/games?genres=${item.slug}&page=1`} style={{textDecoration: 'none'}}>{item.name}</span>
    )
  
  useEffect(() => {
    fetchGenres(API_URL)
  },[fetchGenres])

  return (
    <nav className="header-genres">
      <div className="header-genres__menu">
        {mapGenres}
      </div>
    </nav>
  )
}

const mapStateToProps = state =>{
  return {
    listGenres: state.collectionGenres.genres,
    loadingGenres: state.collectionGenres.loading
  }
}
export default connect(mapStateToProps,{fetchGenres,fetchGames})(HeaderGenres);
