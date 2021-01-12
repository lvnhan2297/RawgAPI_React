import {
  FETCH_GAMES_REQUEST,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_BY_GENRE
} from "../const/ActionTypes";

//khởi tạo ban đầu chưa loading, url page tiếp theo chưa có, danh sách game bằng rỗng
const initialState = {
  loading: false,
  nextUrl: null,
  games: [],
  typeCall:null
};

export default function collectionGame (state = initialState, action) {
  switch(action.type) {
      // yêu cầu lấy danh sách game
      case FETCH_GAMES_REQUEST:
        //thực khởi tạo kho dữ liệu, chạy loading
        return {
          ...state,
          loading: true,
          typeCall: action.payload
        };
      //lẫy dữ liệu từ api thành công
      case  FETCH_GAMES_SUCCESS:
        //lấy kho dữ liệu ban đâu
        //dừng loading
        //set link nextUrl payload được truyền từ GamesActions  payload: data tức payload là data
        //lấy dữ liệu mới thêm vào mảng ban đầu
        return {
          ...state,
          loading: false,
          nextUrl: action.payload.nextUrl,
          games: [...state.games, ...action.payload.fetchedData]
          // games: [...action.payload.fetchedData]
        };
      case FETCH_GAMES_BY_GENRE:
        return {
          ...state,
          loading: false,
          nextUrl: action.payload.nextUrl,
          games: [...action.payload.fetchedData]
        };
      default:
          //nếu không có trong số hành động trên trả về không thay đổi
          return state;
  }
}

