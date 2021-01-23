import 
{OPEN_VIDEO,
CLOSE_VIDEO
}
from '../const/ActionTypes'

export const openVideo = (videoId) => {
  return {
    type: OPEN_VIDEO,
    payload: videoId
  }
}
export const closeVideo = () => {
  return {
    type: CLOSE_VIDEO
  }
}