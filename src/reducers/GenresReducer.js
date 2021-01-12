import {
  FETCH_GENRES_SUCCESS
} from "../const/ActionTypes";

const initialState = {
  genres: []
};

export default function collectionGenres(state = initialState, action){
  switch(action.type) {
    //lẫy dữ liệu từ api thành công
    case  FETCH_GENRES_SUCCESS:
      //lấy kho dữ liệu ban đâu
      //dừng loading
      //lấy dữ liệu mới thêm vào mảng ban đầu
      return {
        ...state,
        loading: false,
        genres: [...action.payload.fetchedData]
      };
    default:
        //nếu không có trong số hành động trên trả về không thay đổi
        return state;
  }
}
