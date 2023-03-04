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
    nguoiDungChiTiet: {
        taiKhoan: 'user03',
        hoTen: 'Nguyễn Văn Hacker',
        matKhau: '989898',
        sdt: '033456789',
        email: 'ano@gmail.com',
        maLoaiND: 'quanTriVien'
    }
}

export const QLUserReducer = (state = initialState, action) => {
    switch (action.type) {

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
            // console.log(action.ndChiTiet);
            state.nguoiDungChiTiet = action.ndChiTiet;
            return { ...state }

        default:
            return state
    }
}
