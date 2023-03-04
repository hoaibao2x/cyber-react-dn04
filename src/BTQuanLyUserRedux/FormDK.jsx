import React, { Component } from 'react'
import { connect } from 'react-redux'

// C2: lưu giá trị từ form ở redux

class FormDK extends Component {

    inputChange = (event) => {
        // console.log(event.target.value, event.target.name);
        let { name, value } = event.target;
        // let valuesForm = {
        //     [name]: value
        // };
        // tổ chức lưu dữ liệu với state
        let newValues = { ...this.props.nguoiDung.values, [name]: value };

        // this.valuesForm = { ...this.valuesForm, [name]: value };
        // console.log(this.valuesForm);

        let newErrors = { ...this.props.nguoiDung.errors };
        let errorMsg = '';
        if (value.trim() === '') {
            // Lỗi
            errorMsg = `${name} không được để trống !`
        }

        // Kiểm tra email
        // Lấy giá trị của typeInput
        let typeVal = event.target.getAttribute('typeinput');
        let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (typeVal === 'email') {
            // Kiểm tra email
            if (!regEx.test(value)) {
                // Không hợp lệ
                errorMsg = 'Email không đúng định dạng';
            }
        }

        newErrors[name] = errorMsg;

        // Đẩy giá trị từ form và thông báo lỗi về redux
        let action = {
            type: 'HANDLE_CHANGE',
            nguoiDung: {
                values: newValues,
                errors: newErrors
            }
        }
        this.props.dispatch(action);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let isValid = true;
        // Kiểm tra các lỗi còn không
        // for in: 
        // key: tên thuộc tính
        for (const key in this.props.nguoiDung.errors) {
            if (this.props.nguoiDung.errors[key] !== '') {
                // Còn lỗi
                isValid = false;
                // Dừng duyệt đối tượng
                break;
            }
        }

        // Kiểm tra dữ liệu rỗng khi không change value
        for (const key in this.props.nguoiDung.values) {
            if (this.props.nguoiDung.values[key] === '') {
                // Giá trị bị rỗng
                isValid = false;
                // Dừng duyệt đối tượng
                break;
            }
        }

        if (!isValid) {
            // Không hợp lệ thì thông báo 
            alert('Dữ liệu không hợp lệ !');
            // Dừng hàm
            return;
        }

        // Đẩy dữ liệu người dùng lên redux
        let action = {
            type: 'THEM_NGUOI_DUNG',
            nguoiDung: this.props.nguoiDung.values
        }
        this.props.dispatch(action);
    }

    render() {
        console.log(this.props);
        let { taiKhoan, hoTen, matKhau, sdt, email, maLoaiND } = this.props.nguoiDung.values;
        return (
            <div className='py-5'>
                <form onSubmit={(event) => {
                    this.handleSubmit(event);
                }}>
                    <div className="row">
                        <div className="col-md-6 mb-5">
                            <input onChange={(event) => {
                                this.inputChange(event)
                            }} value={taiKhoan} type="text" name='taiKhoan' className="form-control" placeholder="Tài khoản" />
                            <span className='d-block text-danger text-left'>{this.props.nguoiDung.errors.taiKhoan}</span>
                        </div>
                        <div className="col-md-6 mb-5">
                            <input onChange={(event) => {
                                this.inputChange(event)
                            }} value={hoTen} type="text" name='hoTen' className="form-control" placeholder="Họ tên" />
                            <span className='d-block text-danger text-left'>{this.props.nguoiDung.errors.hoTen}</span>
                        </div>
                        <div className="col-md-6 mb-5">
                            <input onChange={(event) => {
                                this.inputChange(event)
                            }} value={matKhau} type="password" name='matKhau' className="form-control" placeholder="Mật khẩu" />
                            <span className='d-block text-danger text-left'>{this.props.nguoiDung.errors.matKhau}</span>
                        </div>
                        <div className="col-md-6 mb-5">
                            <input onChange={(event) => {
                                this.inputChange(event)
                            }} value={sdt} type="text" name='sdt' className="form-control" placeholder="Số điện thoại" />
                            <span className='d-block text-danger text-left'>{this.props.nguoiDung.errors.sdt}</span>
                        </div>
                        <div className="col-md-6 mb-5">
                            <input onChange={(event) => {
                                this.inputChange(event)
                            }} value={email} type="text" typeinput='email' name='email' className="form-control" placeholder="Email" />
                            <span className='d-block text-danger text-left'>{this.props.nguoiDung.errors.email}</span>
                        </div>
                        <div className="col-md-6 mb-5">
                            <select value={maLoaiND} onChange={(event) => {
                                this.inputChange(event)
                            }} className='form-control' name="maLoaiND">
                                <option value="khachHang">Khách Hàng</option>
                                <option value="quanTriVien">Quản Trị Viên</option>
                            </select>
                        </div>
                        <div className="col-md-12 mx-auto text-left">
                            <button className='btn btn-success mr-3'>Đăng ký</button>
                            <button onClick={() => {
                                let action = {
                                    type: 'CAP_NHAT',
                                    ndCapNhat: this.props.nguoiDung.values
                                }
                                this.props.dispatch(action);
                            }} type='button' className='btn btn-info'>Cập nhật</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        nguoiDung: rootReducer.QLUserReducer.nguoiDung
    }
}

export default connect(mapStateToProps)(FormDK)