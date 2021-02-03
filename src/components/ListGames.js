import React, {useEffect}  from 'react';
import ItemGame from '../components/ItemGame'
// import {data} from '../data/gameGlobal'
import { connect } from 'react-redux';
import {fetchGames} from '../actions/GamesActions'
import Loading from '../components/Loading'
import { useLocation } from 'react-router-dom';
import useWindowSize from '../utils/useWindowSize'

const ListGames = ({listGames,fetchGames}) => {
const size = useWindowSize()
const setCol = (windowSize) => {
  if(windowSize>=1200) return 4;
  if(windowSize>=992) return 3;
  if(windowSize>=768) return 2;
  if(windowSize<768) return 1;
}
  const location = useLocation();
  let btnActive = location.search?location.search.slice(location.search.lastIndexOf('=')+1):'games'
  let colRendered = setCol(size.width);
  const renderGames = games => {
    let col = 0;
    const items = [];
    for (let i = 0; i < colRendered; i++) {
      items.push([]);
    }
    for (let i = 0; i < games.length; i++) {
      items[col].push(games[i]);
      col++;
      if (col === colRendered) {
        col = 0;
      }
    }
    return items.map((col,index)=>
    <div className="col" key={'games-' + index}>
      {col.map(game=>
          <ItemGame key={game.id} {...game}/>
      )}
  </div>
    )
  };
;

 // gọi data game page tiếp theo dựa vào listGames
  useEffect(() => {
    const handleScroll = () => {
      console.log( window.innerHeight + window.scrollY, document.body.offsetHeight)
      if (
        listGames[btnActive] && 
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight
      ) {
        fetchGames(listGames[btnActive].nextUrl,btnActive)
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fetchGames,listGames,btnActive]);

  return (
    <>
      <div className="games-rendered"
        style={{
        gridTemplateColumns: `repeat(${colRendered}, minmax(30rem, 50rem)`
      }}
      >
        {listGames[btnActive] && renderGames(listGames[btnActive].games)}
      </div>
      {listGames[btnActive] && <Loading loading={listGames[btnActive].loading}/>}
    </>
  )
}

const mapStateToProps = state => {
  // call data games từ store đặt tên là listGames
  // collectionGame là tên bí danh đăt ở reducers/index
  return { 
    listGames: state.collectionGame,
  }
}
export default connect(mapStateToProps,{fetchGames})(ListGames);
