// Store: Nơi chứa các giá trị cần đổi (state)
import { combineReducers, createStore } from 'redux';
import { gioHangReducer } from './reducer/gioHangReducer';
import { gameReducer } from './reducer/gameReducer';
import { QLUserReducer } from './reducer/QLUserReducer';


// state ở RCC là đối tượng
// state = {
// gioHang: []
// }

// reducer: state lưu trên store redux
// rootReducer: chứa tất cả các state


const rootReducer = combineReducers({
    // Khai báo và lưu trữ các state của ứng dụng
    // reducer là 1 hàm trả về state
    // default parameter
    // reducer sẽ nhận tất cả data đẩy lên store => để phân loại nghiệp vụ cần xử lý => kiểm tra type của action

    // Object Literal
    // gioHangReducer: gioHangReducer
    gioHangReducer,
    gameReducer,
    QLUserReducer
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());