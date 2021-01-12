import React, {useEffect}  from 'react';
import ItemGame from '../components/ItemGame'
// import {data} from '../data/gameGlobal'
import { connect } from 'react-redux';
import {fetchGames} from '../actions/GamesActions'
import Loading from '../components/Loading'

const ListGames = ({listGames,loadingGames,linkGameNext,fetchGames,typeLoading}) => {
  const  API_URL= "https://api.rawg.io/api/games?page=1";
  const typeCall = 'call_all'

  const renderGames = games => {
    const result = [];
    const length = games.length;
    
    const column_in_page = 4;
    //số item có trong một column
    const items_in_column = Math.ceil(length / column_in_page);
    //for cột
    for (let col_init = 0; col_init < column_in_page; col_init++) {
      const column = [];
      //lấy vị trí phần tử trong mảng
      let currentIndex = col_init * items_in_column;
      //for item trong 1 cột
      for (let j = 0; j < items_in_column; j++, currentIndex++) {
        //nếu tồn tại thì trả về không thì null 
        const game = games[currentIndex] ? games[currentIndex] : null;
        column.push(<ItemGame key={game.id} {...game} />);
      }
      result.push(
        <div key={col_init} className="col">
          {column}
        </div>
      );
    }
    return result;

  };
  //   const chunkArray = (myArray, chunk_size) => {
  //   var results = [];
  //   while (myArray.length) {
  //       results.push(myArray.splice(0, chunk_size));
  //   }
  //   return results;
  // }
  // console.log(chunkArray(listGames,20))

  // gọi data game page đầu
  useEffect(() => {
    fetchGames(API_URL,typeCall)
  },[fetchGames])
 // gọi data game page tiếp theo dựa vào linkGameNext
  useEffect(() => {
    const handleScroll = () => {
      if (
        linkGameNext && window.innerHeight + window.scrollY >=
        document.body.offsetHeight + 40
      ) {
        setTimeout(
          () => fetchGames(linkGameNext,typeCall),1000
        );
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fetchGames,linkGameNext]);

  return (
    <>
    {loadingGames && typeLoading==='call_by_genre'?<Loading/>:
    <div className="games-rendered">
      {renderGames(listGames)}
    </div> }
    {loadingGames && typeLoading==='call_all' && <Loading/>}
    </>
  )
}

const mapStateToProps = state => {
  // call data games từ store đặt tên là listGames
  // collectionGame là tên bí danh đăt ở reducers/index
  return { 
    listGames: state.collectionGame.games,
    loadingGames: state.collectionGame.loading,
    linkGameNext: state.collectionGame.nextUrl,
    typeLoading: state.collectionGame.typeCall,
  }
}
export default connect(mapStateToProps,{fetchGames})(ListGames);
