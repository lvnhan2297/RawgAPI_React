import React from 'react'
import ListGenres from '../components/ListGenres';
import ListGames from '../components/ListGames';
import FullVideo from '../components/FullVideo';
import { connect } from 'react-redux';
function Games({videoId}) {
  return (
    <>
      <ListGenres/>
      <ListGames/>
      {videoId && <FullVideo videoId={videoId}/>}
    </>
  )
}
const mapStateToProps = state => {
  return {
    videoId: state.actionVideo.videoId,
  }
}
export default connect(mapStateToProps,null)(Games)
