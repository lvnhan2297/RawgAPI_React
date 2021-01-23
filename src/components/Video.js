import React, { useRef, useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { connect } from 'react-redux';
import Loading from './Loading';
import {openVideo} from '../actions/VideoAction'
const Video = ({clip,play,getIdVideo}) => {
  const videoRef = useRef(null);
  const [loading, setLoading] = useState();

  const handleLoadedData = () => {
    setLoading(true)
    if(play){
      setLoading(false)
      videoRef.current.volume = 0;
      videoRef.current.play();
    }
  };
  
  const openFullVideo = () => {
    getIdVideo(clip.video)
  }
  return (
    <div className="video">
      {loading && <Loading className="video__loading" />}
      <video className="video__frame" ref={videoRef} src={clip.clip} onLoadedData={handleLoadedData} loop/>
      <button className="video__full-frame" onClick={openFullVideo}>
        <FaPlay className="icon" />
        <span>Full video</span>
      </button>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    // chuyển dữ liệu từ 
    getIdVideo: (idVideo) => {dispatch(openVideo(idVideo))},
  }
}

export default connect(null,mapDispatchToProps)(Video)
