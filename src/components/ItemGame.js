import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import {
  FaWindows,
  FaPlaystation,
  FaXbox
} from 'react-icons/fa';
import { AiTwotoneLike } from 'react-icons/ai'
import setMetacriticColor from '../utils/setMetacriticColor'
import Video from '../components/Video'
import formatImageUrl from '../utils/formatImageUrl'

const ItemGame = ({background_image,metacritic,name,clip}) => {
  const [hover, setHover] = useState(false);
  const handleMouseEnter = e => {
    setHover(true);
  };
  const background_image_conver = formatImageUrl(background_image)
  const handleMouseLeave = e => {
    setHover(false);
  };

  return (
    <div className="game-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    > 
      <div className="background" style={{backgroundImage: `url("${background_image_conver}")`}}>
        <FaPlay className="icon icon--play" />
      </div>
      {hover && clip && <Video clip={clip} play={hover}/>} 
      <div className="game-item__info">
        <div className="game-item__info__top">
          <div className="game-item__platforms">
            <FaWindows className="icon icon--pc" style={{ marginRight: '0.6rem' }}/>
            <FaPlaystation className="icon icon--playstation" style={{ marginRight: '0.6rem' }}/>
            <FaXbox className="icon icon--xbox"/>
          </div>
          <span className={`game-item__meta ${setMetacriticColor(metacritic)}`}>{metacritic||0}</span>
        </div>
        <div className="game-item__info__bottom">
          <a title="Grand Theft Auto V" className="heading-1 game-item__name" href="#/games/grand-theft-auto-v" style={{textDecoration: 'none'}}>{name}</a>
          <AiTwotoneLike className="icon icon--like"/>
        </div>
      </div>
    </div>
  )
}

export default ItemGame
