import {
  FETCH_GAMES_REQUEST,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_BY_GENRE
} from "../const/ActionTypes";
import  {fetchData}  from '../utils/apiCaller';
// đang cần làm gì? lấy data
export const gamesFetchRequest = (typeCall) => {
  return {
    type: FETCH_GAMES_REQUEST,
    payload: typeCall
  }
}

// lấy những cái nào trong data? đẩy lên reduces
export const gamesFetchSuccess = (fetchedData, nextUrl) => {
  return {
      type: FETCH_GAMES_SUCCESS,
      payload: {fetchedData, nextUrl}
  }
}
export const gamesFetchByGenreSuccess = (fetchedData, nextUrl) => {
  return {
      type: FETCH_GAMES_BY_GENRE,
      payload: {fetchedData, nextUrl}
  }
}

// thực hiện action lấy dữ liệu từ api sau đó gửi lên reducers để setup lại state
export const fetchGames = (API_URL,typeCall) => async (dispatch) => {
  try {
    //gửi yêu cầu sẽ lấy api chuẩn bị đổ vào reducers
      if(typeCall==='call_all'){
        await dispatch(gamesFetchRequest(typeCall));
      }
      if(typeCall==='call_by_genre'){
        await dispatch(gamesFetchRequest(typeCall));
      }
    //fetch data từ api
      const data = await fetchData(API_URL);
      const { next, results } = data;

      // gửi dữ liệu gồm datagame và link nextPage đến reducers để update state
      if(typeCall==='call_all'){
        await dispatch(gamesFetchSuccess(results, next));
      }
      if(typeCall==='call_by_genre'){
        await dispatch(gamesFetchByGenreSuccess(results, next));
      }
  } catch (err) {
    console.log('fetchGenre error', err);
  }
};

