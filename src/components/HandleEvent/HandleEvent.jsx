import React, { Component } from 'react'

export default class HandleEvent extends Component {

    showName = () => {
        alert('Hi !');
    }

    showName2 = (name) => {
        alert(`Hello ${name}`);
    }

    render() {
        return (
            <div className="container">
                {/* {}: Truyền dữ liệu vào thẻ jsx */}
                {/* <button onClick={this.showName} className="btn btn-success">Click</button> */}

                {/* C1: bind() */}
                {/* <button onClick={this.showName2.bind(this, 'Lò Văn Tèo')} className="btn btn-success">Click me !</button> */}

                {/* C2: hàm ẩn danh */}
                <button onClick={() => {
                    this.showName2('Test');
                        console.log('Code 2');
                }} className="btn btn-danger">Click có tham số</button>
            </div>
        )
    }
}
