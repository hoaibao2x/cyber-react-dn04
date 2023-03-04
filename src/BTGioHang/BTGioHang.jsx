import React, { Component } from 'react'
import DanhSachSP from './DanhSachSP'
import GioHang from './GioHang'

export default class BTGioHang extends Component {

    phoneList = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/phone/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/phone/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/phone/applephone.jpg" }
    ]

    // Khai báo state
    state = {
        gioHang: [
            // {
            //     "maSP": 1,
            //     "tenSP": "VinSmart Live",
            //     "giaBan": 5700000,
            //     "hinhAnh": "./img/phone/vsphone.jpg",
            //     "soLuong": 1
            // }
        ]
    }



    // input:thông tin sản phẩm đang được click
    // output: sản phẩm được thêm vào mảng giỏ hàng
    addToCart = (spClick) => {
        console.log(spClick); // Chưa có số lượng
        let gioHangMoi = [...this.state.gioHang];

        // Tìm sản phẩm trong giỏ hàng có mã trùng vs mã spClick
        // find => trả về đối tượng, findIndex => vị trí phần tử
        let spFind = this.state.gioHang.find((spGH) => {
            // Điều kiện tìm kiếm
            return spClick.maSP === spGH.maSP;
        })

        // Nếu sản phẩm cần thêm đã tồn tại (dựa vào maSP) trong giỏ hàng => tăng số lượng
        // Ngược lại, thêm 1 hàng sản phẩm mới
        if (spFind) {
            // Nếu tìm thấy => Đã có trong giỏ hàng
            spFind.soLuong = spFind.soLuong + 1;
        } else {
            // Copy thuộc tính của spClick và thêm thuộc tính mới soLuong
            let spGHMoi = { ...spClick, soLuong: 1 };
            // gioHangMoi: sản phẩm của giỏ hàng cũ và thêm sản phẩm spGHMoi
            // gioHangMoi = [...gioHangMoi, spGHMoi];
            gioHangMoi.push(spGHMoi);
        }

        this.setState({
            // Lưu vào state mảng giỏ hàng mới (Chứa các sản phẩm mới thêm)
            gioHang: gioHangMoi
        })
    }

    removeCart = (maXoa) => {
        // console.log(maXoa);
        let gioHangCapNhat = [...this.state.gioHang];

        // Tìm được vị trí phần tử cần xóa trong giỏ hàng (findIndex)
        // splice => Xóa phần tử theo vị trí

        // Tìm ko thấy => trả về -1
        // let indexXoa = gioHangCapNhat.findIndex((spGH) => {
        //     return spGH.maSP === maXoa;
        // })

        // if (indexXoa !== -1) {
        //     // Tìm thấy
        //     gioHangCapNhat.splice(indexXoa, 1);
        // }

        //? Lọc ra các sản phẩm có mã sản phẩm khác với sản phẩm cần xóa
        //? filter trả về mảng mới không chứa sản phẩm cần xóa
        gioHangCapNhat = gioHangCapNhat.filter((spGH) => {
            return spGH.maSP !== maXoa;
        })


        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    changeSL = (maSP, sl) => {
        let gioHangCapNhat = [...this.state.gioHang];
        let spFind = gioHangCapNhat.find((spGH) => {
            return spGH.maSP === maSP;
        })

        if (spFind) {
            // số lượng mới = số lượng cũ (+ 1 hoặc -1)
            spFind.soLuong = spFind.soLuong + sl;

            if (spFind.soLuong < 1) {
                alert('Số lượng tối thiểu là 1 !');
                // 0 - (-1) => 0 + 1 = 1
                // spFind.soLuong = spFind.soLuong -sl;
                spFind.soLuong -= sl;
            }
        }
        this.setState({
            gioHang: gioHangCapNhat
        })
    }



    tinhTongSL = () => {
        //? reduce ((kết quả, từng phần tử, vị trí phần tử) => {}, giá trị khởi tạo của kết quả): duyệt mảng, dựa vào công thức tính toán 
        // return 1 kết quả tính toán
        let tong = this.state.gioHang.reduce((tongSL, sanPham, index) => {
            // công thức tính toán
            return tongSL += sanPham.soLuong;
        }, 0);

        return tong.toLocaleString();
    }


    render() {
        return (
            <div className='container'>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown">Dropdown</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Action 1</a>
                                    <a className="dropdown-item" href="#">Action 2</a>
                                </div>
                            </li>
                        </ul>
                        <div className="text-white form-inline my-2 my-lg-0">
                            <p data-toggle="modal" data-target="#modelId">Giỏ hàng ({this.tinhTongSL()})</p>
                        </div>
                    </div>
                </nav>
                <DanhSachSP phoneList={this.phoneList} addToCart= {this.addToCart}/>
                <GioHang gioHang={this.state.gioHang} removeCart={this.removeCart} changeSL ={this.changeSL}/>
            </div>
        )
    }
}
