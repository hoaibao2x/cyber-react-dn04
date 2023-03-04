import React, { Component } from 'react'

export default class DemoState extends Component {

    // Tạo 1 biến chứa trạng thái đăng nhập
    // Tạo hàm kiểm tra khi click button login => 
    // Kiểm tra: Nếu là true => Đã đăng nhập => Header hiển thị tên username
    // Ngược lại hiển thị button login

    // isLogin = false;

    state = {
        isLogin: false
    }

    // Phương thức kiểm tra đăng nhập
    checkLogin = () => {
        if (this.state.isLogin) {
            return <p className='text-white'>Random Name</p>
        }

        return <button onClick={() => {
            // alert('Test')
            // Click đổi isLogin => true => UI sẽ load lại và hiển thị tên client
            // this.isLogin = true;
            // console.log(this.isLogin);
            // this.render(); //! Hàm render chỉ chạy 1 lần khi load ứng dụng
            // Để đổi được giá trị và render lại UI khi giá trị thay đổi => state
            // Set giá trị mới cho isLogin và render lại UI

            let newState = {
                isLogin: true
            }

            this.setState(newState, () => {
                // Tham số thứ hai của setState giúp xử lý các nghiệp vụ sau khi state đã được đổi
                console.log('setState', this.state.isLogin);
            });

            // Nếu đặt clg bên dưới setState sẽ bị sai kết quả thông báo do bất đồng bộ dữ liệu
            // console.log('setState', this.state.isLogin);

            // this.setState({
            //     isLogin: true
            // })
        }} className='btn btn-warning'>
            Login
        </button>
    }

    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-dark bg-dark">
                    <span className="navbar-brand mb-0 h1">Navbar</span>
                    <div>
                        {/* Hiển thị button login hoặc username */}
                        {this.checkLogin()}
                    </div>
                </nav>
            </div>


        )
    }
}
