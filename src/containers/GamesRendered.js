import React from 'react';
import ItemGame from '../components/ItemGame'
import {data} from '../data/gameGlobal'

const GamesRendered = () => {

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
        console.log(game)
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

  return (
    <>
      <div className="games-rendered">
        {renderGames(data.results)}
      </div>
    </>
  )
}

export {GamesRendered}
