import React, { useRef } from 'react';

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
        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 448 512" className="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
        </svg>
        <span>Full video</span>
      </button>
    </div>
  )
}

export default Video
