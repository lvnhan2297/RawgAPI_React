import {
  OPEN_VIDEO,
  CLOSE_VIDEO
} from "../const/ActionTypes";

//khởi tạo ban đầu chưa loading, url page tiếp theo chưa có, danh sách game bằng rỗng
const initialState = {
  videoId: null,
};

function actionVideo(state = initialState, action ) {
  switch (action.type) {
    case OPEN_VIDEO:
      return {
        videoId: action.payload,
      };
    case CLOSE_VIDEO:
      return {
        videoId: null,
      };
    default:
      return state;
  }
}

export default actionVideo;

