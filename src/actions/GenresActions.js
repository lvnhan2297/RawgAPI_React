import {
  FETCH_GENRES_SUCCESS
} from "../const/ActionTypes";

import  {fetchData}  from '../utils/apiCaller';

export const genresFetchSuccess = (fetchedData) => {
  return {
      type: FETCH_GENRES_SUCCESS,
      payload: {fetchedData}
  }
}

export const fetchGenres = (API_URL) => async (dispatch) => {
  try {

    const data = await fetchData(API_URL);
    const {results} = data;
    
    dispatch(genresFetchSuccess(results));
  } catch (err) {
    console.log('fetcGenres error', err);
  }
};