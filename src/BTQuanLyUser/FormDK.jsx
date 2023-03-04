import React, { Component } from 'react'
import { connect } from 'react-redux'

// C1: Lưu giá trị từ form ở state của component
// C2: lưu giá trị từ form ở redux

class FormDK extends Component {

    // chứa giá trị từ form, chứa nội dung error
    state = {
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

    // valuesForm = {};

    inputChange = (event) => {
        // console.log(event.target.value, event.target.name);
        let { name, value } = event.target;
        // let valuesForm = {
        //     [name]: value
        // };
        // tổ chức lưu dữ liệu với state
        let newValues = { ...this.state.values, [name]: value };
        console.log(newValues);

        // this.valuesForm = { ...this.valuesForm, [name]: value };
        // console.log(this.valuesForm);

        let newErrors = { ...this.state.errors };
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

        this.setState({
            values: newValues,
            errors: newErrors
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let isValid = true;
        // Kiểm tra các lỗi còn không
        // for in: 
        // key: tên thuộc tính
        for (const key in this.state.errors) {
            if (this.state.errors[key] !== '') {
                // Còn lỗi
                isValid = false;
                // Dừng duyệt đối tượng
                break;
            }
        }

        // Kiểm tra dữ liệu rỗng khi không change value
        for (const key in this.state.values) {
            if (this.state.values[key] === '') {
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
            nguoiDung: this.state.values
        }
        this.props.dispatch(action);
    }

    //? C1: Check props + state
    // static getDerivedStateFromProps(newProps, currentState) {

    //     // Trường hợp chỉnh sửa (gõ trên form) thì cần đổi state của component
    //     // Trường hợp xem thông tin  thì lên redux lấy nguoiDungChiTiet về lưu vào props => Đem từ props lưu vào trong state
    //     console.log('newProps', newProps);
    //     console.log('currentState', currentState);

    //     if (newProps.nguoiDungChiTiet.taiKhoan !== currentState.values.taiKhoan) {
    //         //? Cần xem thông tin chi tiết
    //         return {
    //             ...currentState,
    //             values: newProps.nguoiDungChiTiet // Lấy nguoiDungChiTiet lưu vào state
    //         }
    //     }

    //     //? ngược lại, cập nhật người dùng
    //     return currentState; // Lấy dữ liệu từ người dùng lưu vào state
    // }

    // componentWillReceiveProps(newProps) {
    //     // Chỉ chạy khi props thay đổi => xem chi tiết
    //     this.setState({
    //         values: newProps.nguoiDungChiTiet
    //     })
    // }

    //? C2: Check props
    componentWillReceiveProps(newProps) {
        // Chỉ chạy khi props thay đổi => xem chi tiét
        this.setState({
            values: newProps.nguoiDungChiTiet
        })
    }

    render() {
        // console.log(this.props);
        let { taiKhoan, hoTen } = this.state.values;
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
                            <span className='d-block text-danger text-left'>{this.state.errors.taiKhoan}</span>
                        </div>
                        <div className="col-md-6 mb-5">
                            <input onChange={(event) => {
                                this.inputChange(event)
                            }} value={hoTen} type="text" name='hoTen' className="form-control" placeholder="Họ tên" />
                            <span className='d-block text-danger text-left'>{this.state.errors.hoTen}</span>
                        </div>
                        <div className="col-md-6 mb-5">
                            <input onChange={(event) => {
                                this.inputChange(event)
                            }} type="password" name='matKhau' className="form-control" placeholder="Mật khẩu" />
                            <span className='d-block text-danger text-left'>{this.state.errors.matKhau}</span>
                        </div>
                        <div className="col-md-6 mb-5">
                            <input onChange={(event) => {
                                this.inputChange(event)
                            }} type="text" name='sdt' className="form-control" placeholder="Số điện thoại" />
                            <span className='d-block text-danger text-left'>{this.state.errors.sdt}</span>
                        </div>
                        <div className="col-md-6 mb-5">
                            <input onChange={(event) => {
                                this.inputChange(event)
                            }} type="text" typeinput='email' name='email' className="form-control" placeholder="Email" />
                            <span className='d-block text-danger text-left'>{this.state.errors.email}</span>
                        </div>
                        <div className="col-md-6 mb-5">
                            <select onChange={(event) => {
                                this.inputChange(event)
                            }} className='form-control' name="maLoaiND">
                                <option value="khachHang">Khách Hàng</option>
                                <option value="quanTriVien">Quản Trị Viên</option>
                            </select>
                        </div>
                        <div className="col-md-12 mx-auto text-left">
                            <button className='btn btn-success mr-3'>Đăng ký</button>
                            <button type='button' className='btn btn-info'>Cập nhật</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        nguoiDungChiTiet: rootReducer.QLUserReducer.nguoiDungChiTiet
    }
}

export default connect(mapStateToProps)(FormDK)