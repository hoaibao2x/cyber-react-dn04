import React, { Component } from 'react'

export default class Child extends Component {

    constructor(props) {

        super(props)
        this.state = {
        }
        this.checkTime = () => {

        }
        console.log('constructor child');
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps child');
        return null;
    }

    shouldComponentUpdate(newProps, newState) {
        console.log('shouldComponentUpdate child');

        // return true => cho phép render lại UI
        // return false => không cho phép render lại UI (những component chứa thông tin ít thay đổi => ko render lại - footer)

        // render theo điều kiện
        // newProps giá trị mới của props
        console.log("newProps", newProps);
        // this.props giá trị hiện tại của props
        console.log('this.props', this.props);

        if (newProps.like !== this.props.like) {
            // có đổi like => render lại UI
            return true
        } else {
            // giá tri like ko đổi => ko render lại UI
            // number thay đổi ko render lại UI
            return false
        }
    }

    render() {
        // this.props được cập nhật giá trị mới
        console.log('this.props render', this.props);
        console.log('render child');
        return (
            <div>
                <footer className='bg-white text-dark m-0 p-0'>
                    <h3>Footer</h3>
                </footer>
            </div>
        )
    }

    componentDidMount() {
        this.checkTime = setInterval(() => {
            console.log('Check time sau 2s')
        }, 2000)
        console.log('componentDidMount child');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate child');
    }

    componentWillUnmount() {
        // Xử lý nghiệp vụ thông báo cho user trước khi chuyển trang hoặc ẩn component
        // Các APi chạy ngầm => thường xuyên cập nhật lấy dữ liệu mới về
        clearInterval(this.checkTime);
        console.log('componentWillUnmount child');
    }
}
