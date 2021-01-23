import {
  FETCH_GAMES_REQUEST,
  FETCH_GAMES_SUCCESS
} from "../const/ActionTypes";
import  {fetchData}  from '../utils/apiCaller';
// đang cần làm gì? lấy data
export const gamesFetchRequest = (btnActive) => {
  return {
    type: FETCH_GAMES_REQUEST,
    payload : {btnActive}
  }
}

// lấy những cái nào trong data? đẩy lên reduces
export const gamesFetchSuccess = (fetchedData, nextUrl, btnActive) => {
  return {
      type: FETCH_GAMES_SUCCESS,
      payload: {fetchedData, nextUrl, btnActive}
  }
}


// thực hiện action lấy dữ liệu từ api sau đó gửi lên reducers để setup lại state
export const fetchGames = (API_URL,btnActive) => async (dispatch) => {
  try {
    //gửi yêu cầu sẽ lấy api chuẩn bị đổ vào reducers
      await dispatch(gamesFetchRequest(btnActive));
      const data = await fetchData(API_URL);
      const { next, results } = data;
      await dispatch(gamesFetchSuccess(results, next, btnActive));
  } catch (err) {
    console.log('fetchGenre error', err);
  }
};

