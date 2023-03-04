// Khai báo giá trị mặc định cho state
const gioHang = [
    // { "maSP": 1, "tenSP": "VinSmart Live", "giaBan": 5700000, "hinhAnh": "./img/phone/vsphone.jpg", "soLuong": 1 }
];

export const gioHangReducer = (state = gioHang, action) => {
    // console.log(action);
    // if (action.type == 'THEM_GIO_HANG');
    switch (action.type) {
        case 'THEM_GIO_HANG':
            // kiểm tra sản phẩm có tồn tại trong giỏ hàng chưa
            let spFind = state.find((sp) => {
                return sp.maSP === action.sanPham.maSP;
            })
            if (spFind) {
                // có sản phẩm trong cart
                spFind.soLuong += 1;
            } else {
                // tạo sản phẩm giỏ hàng
                // spread operator
                let spGH = { ...action.sanPham, soLuong: 1 };
                state.push(spGH);
            }

            console.log(state);

            // return về giá trị mới  của state
            //? Cơ chế redux là nếu state đổi giá trị thì tự động render lại các component có kết nối đến store
            //! imutable: tính bất biến => redux đang không nhận biết là state đã đổi giá trị => UI không render lại => tham chiếu (địa chỉ ô nhớ)
            //! => redux sẽ kiểm tra địa chỉ ô nhớ của state, nếu địa chỉ ko đổi => giá trị ko đổi => không render lại UI

            // trả về một mảng mới của state (dùng cú pháp copy của ES6)
            return [...state];

        case 'XOA_GIO_HANG':
            let gioHangCapNhat = state.filter((sp) => {
                // trả về mảng mới chứa sp cần giữ lại
                return sp.maSP !== action.maSPXoa;
            })
            // update vào state
            // do gioHangCapNhat có địa chỉ mới => khi gán vào state => state sẽ có địa chỉ mới 
            state = gioHangCapNhat;
            return state;

        case 'DOI_SO_LUONG':
            let spFindDoi = state.find((sp) => {
                return sp.maSP === action.maSPDoi;
            });
            if (spFindDoi) {
                // tìm thấy
                spFindDoi.soLuong += action.soLuong;
                if (spFindDoi.soLuong < 1) {
                    spFindDoi.soLuong = spFindDoi.soLuong - action.soLuong;
                }
            }

            return [...state];

        default:
            return state;
    }
}