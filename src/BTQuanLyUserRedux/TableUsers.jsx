import React, { Component } from 'react'
import { connect } from 'react-redux'

class TableUsers extends Component {

    renderMangND = () => {
        let stt = 0;
        return this.props.mangNguoiDung.map((user) => {
            return <tr key={user.taiKhoan}>
                <td>{stt += 1}</td>
                <td>{user.taiKhoan}</td>
                <td>{user.hoTen}</td>
                <td>{user.matKhau}</td>
                <td>{user.sdt}</td>
                <td>{user.email}</td>
                <td>{user.maLoaiND}</td>
                <td>
                    <button onClick={() => {
                        let action = {
                            type: 'XOA_NGUOI_DUNG',
                            taiKhoanXoa: user.taiKhoan
                        }
                        this.props.dispatch(action);
                    }} className='btn btn-danger d-inline-block mr-2'>Xóa</button>
                    <button onClick={() => { 
                        let action = {
                            type: 'XEM_CHI_TIET',
                            ndChiTiet: user
                        }
                        this.props.dispatch(action);
                     }} className='btn btn-warning d-inline-block'>Xem</button>
                </td>
            </tr>
        })
    }

    render() {
        return (
            <div className='py-5'>
                <table className="table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tài khoản</th>
                            <th>Họ tên</th>
                            <th>Mật khẩu</th>
                            <th>SĐT</th>
                            <th>Email</th>
                            <th>Loại ND</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderMangND()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        mangNguoiDung: rootReducer.QLUserReducer.mangNguoiDung
    }
}


export default connect(mapStateToProps)(TableUsers);