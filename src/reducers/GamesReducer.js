import {
  FETCH_GAMES_REQUEST,
  FETCH_GAMES_SUCCESS
} from "../const/ActionTypes";

//khởi tạo ban đầu chưa loading, url page tiếp theo chưa có, danh sách game bằng rỗng
const initialState = {
  loading: false,
  nextUrl: null,
  games: [],
};

function collection(state = initialState, action ) {
  switch (action.type) {
    case FETCH_GAMES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_GAMES_SUCCESS:
      return {
        ...state,
        loading: false,
        nextUrl: action.payload.nextUrl,

        games: [...state.games, ...action.payload.fetchedData]
      };
    default:
      return state;
  }
}

function collectionGame(state = {}, action) {

  switch (action.type) {
    case FETCH_GAMES_REQUEST:
    case FETCH_GAMES_SUCCESS:
      return {
        ...state,
        [action.payload.btnActive]: collection(state[action.payload.btnActive], action)
      };
    default:
      return state;
  }
}

export default collectionGame;


// export default function collectionGame (state = initialState, action) {
//   switch(action.type) {
//       // yêu cầu lấy danh sách game
//       case FETCH_GAMES_REQUEST:
//         //thực khởi tạo kho dữ liệu, chạy loading
//         return {
//           ...state,
//           loading: true,
//           getNextPage: Object.keys(state.games).includes(action.payload)?'scroll':'changeCate'
//         };
//       //lẫy dữ liệu từ api thành công
//       case  FETCH_GAMES_SUCCESS:
//         //lấy kho dữ liệu ban đâu
//         //dừng loading
//         //set link nextUrl payload được truyền từ GamesActions  payload: data tức payload là data
//         //lấy dữ liệu mới thêm vào mảng ban đầu
//         return {
//           ...state,
//           loading: false,
//           // nextUrl: action.payload.nextUrl,
//           // check xem có đang chyển trang tức cateload === btnActive
//           // nếu bằng nhau tức không chuyển thêm trang thứ 2 và lưu lại
//           // chuyển trang thì tạo key và value mới lưu vào state, nếu key tôn tại thì dữ nguyên giá trị
//           games: state.cateload===action.payload.btnActive?
//           {...state.games,[action.payload.btnActive] : [...state.games[state.cateload],...(action.payload.fetchedData)]}
//           :state.nextUrl && Object.keys(state.games).includes(action.payload.btnActive)?
//           // :state.nextUrl && state.nextUrl === action.payload.nextUrl?
//           {...state.games}:{...state.games,[action.payload.btnActive] : action.payload.fetchedData},
//           cateload: action.payload.btnActive,
//           nextUrl: action.payload.nextUrl,
//         };
//       default:
//           //nếu không có trong số hành động trên trả về không thay đổi
//           return state;
//   }
// }

