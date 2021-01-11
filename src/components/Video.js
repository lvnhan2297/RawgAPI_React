import React, { useRef } from 'react';
import { FaPlay } from 'react-icons/fa';
const Video = ({clip,play}) => {
  const videoRef = useRef(null);

  const handleLoadedData = () => {
    if(play){
      videoRef.current.volume = 0;
      videoRef.current.play();
    }
  };
  return (
    <div className="video">
      <video className="video__frame" ref={videoRef} src={clip.clip} onLoadedData={handleLoadedData} loop/>
      <button className="video__full-frame">
          <FaPlay className="icon" />
        <span>Full video</span>
      </button>
    </div>
  )
}

export default Video
