import {
  FETCH_GAME_DETAIL,
  FETCH_GAME_DETAIL_SUCCESS
} from "../const/ActionTypes";

//khởi tạo ban đầu chưa loading, url page tiếp theo chưa có, danh sách game bằng rỗng
const initialState = {
  loading: false,
  data: [],
};

function collectionGamesDetail(state = initialState, action ) {
  switch (action.type) {
    case FETCH_GAME_DETAIL:
      return {
        ...state,
        loading: true,
      };
    case FETCH_GAME_DETAIL_SUCCESS:
      // console.log([action.payload.data])
      return {
        ...state,
        loading: false,
        data: {...state.data, [action.payload.keygame]: [action.payload.data,{...action.payload.imgScreenshots}]}
      };
    default:
      return state;
  }
}

export default collectionGamesDetail;

