import React from 'react'
import { connect } from 'react-redux'
import {closeVideo} from '../actions/VideoAction'

function FullVideo({videoId,closeFullVideo}) {
  const onClose = () => {
    closeFullVideo()
  }
  return (
    <>
      <div className="full-video">
        <span className="full-video__close" onClick={onClose}>
          &times;
        </span>
        <div className="full-video__frame">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
            title="Youtube video player"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          ></iframe>
        </div>
      </div>
    </>
  )
}
const mapDispatchToProps = dispatch => {
  return {
    // chuyển dữ liệu từ 
    closeFullVideo: () => {dispatch(closeVideo())},
  }
}

export default connect(null,mapDispatchToProps)(FullVideo)
