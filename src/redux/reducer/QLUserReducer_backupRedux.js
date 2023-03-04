import { findDOMNode } from "react-dom";

const initialState = {
    mangNguoiDung: [
        {
            taiKhoan: 'user01',
            hoTen: 'Nguyễn Văn A',
            matKhau: '123456',
            sdt: '0123456789',
            email: 'van@gmail.com',
            maLoaiND: 'khachHang'
        },
        {
            taiKhoan: 'user02',
            hoTen: 'Phạm Văn B',
            matKhau: '123456',
            sdt: '0123456789',
            email: 'vanB@gmail.com',
            maLoaiND: 'khachHang'
        }
    ],
    nguoiDung: {
        values: {
            taiKhoan: '',
            hoTen: '',
            matKhau: '',
            sdt: '',
            email: '',
            maLoaiND: 'khachHang'
        },
        errors: {
            taiKhoan: '',
            hoTen: '',
            matKhau: '',
            sdt: '',
            email: '',
            maLoaiND: ''
        }
    }
}

export const QLUserReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'HANDLE_CHANGE':
            console.log(action.nguoiDung);
            state.nguoiDung = action.nguoiDung;
            return { ...state }

        case 'THEM_NGUOI_DUNG':
            console.log(action.nguoiDung);
            // state.mangNguoiDung.push(action.nguoiDung);

            // Copy mảng cũ sang mảng mớivà thêm phần tử cho mảng => Lưu mảng mới vào lại biến mảng cũ => Đổi địa chỉ ô nhớ
            state.mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung];

            return { ...state }

        case 'XOA_NGUOI_DUNG':
            state.mangNguoiDung = [...state.mangNguoiDung.filter((user) => {
                return user.taiKhoan !== action.taiKhoanXoa
            })]

            return { ...state }

        case 'XEM_CHI_TIET':
            console.log(action.ndChiTiet);
            state.nguoiDung.values = action.ndChiTiet;
            console.log(state.nguoiDung);
            state.nguoiDung = { ...state.nguoiDung };

            return { ...state }

        case 'CAP_NHAT':
            console.log(action.ndCapNhat);
            // Tìm người dùng cần cập nhật trong mảng
            // find, findIndex

            //? find method
            // let ndFind = state.mangNguoiDung.find(nd => nd.taiKhoan === action.ndCapNhat.taiKhoan);

            // if (ndFind) {
            //     ndFind.hoTen = action.ndCapNhat.hoTen
            // }

            //? findIndex modethod
            let ndFindIndex = state.mangNguoiDung.findIndex(nd => {
                return nd.taiKhoan === action.ndCapNhat.taiKhoan
            });

            if (ndFindIndex !== -1) {
                state.mangNguoiDung[ndFindIndex] = action.ndCapNhat
            }

            console.log(state.mangNguoiDung[ndFindIndex]);

            state.mangNguoiDung = [...state.mangNguoiDung];

            return { ...state }

        default:
            return state
    }
}
