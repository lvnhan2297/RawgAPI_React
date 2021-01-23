import React, { Fragment, useEffect } from 'react'
import { AiOutlinePlusCircle, AiTwotoneLike } from 'react-icons/ai';
import { FaPlay } from 'react-icons/fa';
import { connect } from 'react-redux'
import {fetchGamesDetail} from '../actions/GameActions'
import setMetacriticColor from '../utils/setMetacriticColor'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom';
import {openVideo} from '../actions/VideoAction'
import FullVideo from '../components/FullVideo';
import ReactHtmlParser from 'react-html-parser'; 
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);

const GameDetail = ({gameDetail,fetchGamesDetail,match,loading,getIdVideo,videoId}) => {  
  const LinkDetailGame = `https://api.rawg.io/api${match.url}`;
  const nameGameDetail = match.params.slug

  useEffect(() => {
    fetchGamesDetail(LinkDetailGame,nameGameDetail)
  }, [fetchGamesDetail,LinkDetailGame,nameGameDetail])

  const openFullVideo = () => {
    getIdVideo(gameDetail[nameGameDetail][0].clip.video)
  }
  const releasedDate = gameDetail && gameDetail[nameGameDetail] && `${dayjs(gameDetail[nameGameDetail][0].released).format('ll')} (${dayjs(
    gameDetail[nameGameDetail][0].released
  ).fromNow()})`;
  return (
    <>
    {loading?<Loading/>:gameDetail && gameDetail[nameGameDetail] &&
    <div className="game">
      <div className="deep">
        <div className="game__back-art" style={{backgroundImage: `linear-gradient(rgba(15, 15, 15, 0.7), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)),url("${gameDetail[nameGameDetail][0].background_image}")`, zIndex: 1}} />
      </div>
      <div className="game__main">
        <div>
          <div className="game__art" style={{backgroundImage: `url("${gameDetail[nameGameDetail][0].background_image}")`}} />
          {gameDetail[nameGameDetail][0].clip && <li className="game__trailer" onClick={openFullVideo}>
            <FaPlay />
            <span>Play trailer</span>
          </li>}
          <ul className="game__actions">
            <li className="btn game__action game__action--like">
              <AiTwotoneLike/>
              <span>Like</span>
            </li>
            <li className="btn game__action">
              <AiOutlinePlusCircle/>
              <span>Collection</span>
            </li>
          </ul>
        </div>
        <div className="game__content">
          <h2 className="game__name">{gameDetail[nameGameDetail][0].name}</h2>
          <span className="game__alternative-names" />
          <h3 className="heading-3">
            Released Date
            <p className="game__released">{releasedDate}</p>
          </h3>
          <span className={`game__meta ${setMetacriticColor(gameDetail[nameGameDetail][0].metacritic)}`}>{gameDetail[nameGameDetail][0].metacritic||0}</span>
          <h3 className="heading-3">
            Genres
            <div className="game__genres">
              {gameDetail[nameGameDetail][0].genres.map((item,index)=>
              <Fragment key={item.id}>
                {index !== 0 && ', '}
                <Link className="game__genre" to={`/games?genre=${item.slug}`} style={{textDecoration: 'none'}}>{item.name}</Link>
              </Fragment>
              )}
            </div>
          </h3>
          <h3 className="heading-3">
            Homepage
            <p className="game__homepage"><a href={gameDetail[nameGameDetail][0].website} target="blank">{gameDetail[nameGameDetail][0].website}</a></p>
          </h3>
          <h3 className="heading-3">
            Description
            <div className="game__description">
              {ReactHtmlParser(gameDetail[nameGameDetail][0].description)}
              <span className="heading-3 game__show-more">read more</span>
            </div>
          </h3>
        </div>
      </div>
      <div className="game__sub">
        <div className="left">
          <div className="game__images">
            {Object.keys(gameDetail[nameGameDetail][1]).map((item,index)=>
            <img className="game__image" key={index} alt={gameDetail[nameGameDetail][1][item].id} src={gameDetail[nameGameDetail][1][item].image} />
            )}
            </div>
        </div>
        <div className="right">
          <h3 className="heading-3">
            Tags
            <div className="game__tags">
              {gameDetail[nameGameDetail][0].tags.map(
                item => <Link className="game__tag" key={item.id} to={`/games?tag=${item.slug}`} style={{textDecoration: 'none'}}>{item.name}</Link>
              )}
            </div>
          </h3>
        </div>
      </div>
      <div className="footer">Power by RAWG</div>
    </div>
      } 
    {videoId && <FullVideo videoId={videoId}/>}
    </>
  )
}
const mapStateToProps = state => {
  // call data games từ store đặt tên là listGames
  // collectionGame là tên bí danh đăt ở reducers/index
  return { 
    gameDetail: state.collectionGamesDetail.data,
    loading: state.collectionGamesDetail.loading,
    videoId: state.actionVideo.videoId,
  }
}
const getIdVideo = (idVideo) => async (dispatch) => {
  await dispatch(openVideo(idVideo))
}

export default connect(mapStateToProps,{fetchGamesDetail,getIdVideo})(GameDetail);
