import {
  FETCH_GAME_DETAIL,
  FETCH_GAME_DETAIL_SUCCESS,
} from "../const/ActionTypes";
import  {fetchData}  from '../utils/apiCaller';
// đang cần làm gì? lấy data
export const fetchGameDetaiRequest = () => {
  return {
    type: FETCH_GAME_DETAIL
  }
}

// lấy những cái nào trong data? đẩy lên reduces
export const fetchGameDetaiSuccess = (data,keygame,imgScreenshots) => {
  return {
      type: FETCH_GAME_DETAIL_SUCCESS,
      payload: {data,keygame,imgScreenshots}
  }
}

export const fetchGamesDetail = (API_URL,keygame) => async (dispatch) => {
  try {
    //gửi yêu cầu sẽ lấy api chuẩn bị đổ vào reducers
      await dispatch(fetchGameDetaiRequest());
      const data = await fetchData(API_URL);
      const linkScreenshots = `https://api.rawg.io/api/games/${data.id}/screenshots?page_size=20`
      const imgScreenshots = await fetchData(linkScreenshots);
      // console.log(imgScreenshots.results)
      await dispatch(fetchGameDetaiSuccess(data,keygame,imgScreenshots.results));
  } catch (err) {
    console.log('fetchGenre error', err);
  }
};


