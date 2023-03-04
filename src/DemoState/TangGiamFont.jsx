import React, { Component, Fragment } from 'react'

export default class TangGiamFont extends Component {

    // fontState = 16; // number (Dễ tăng giảm giá trị)

    state = {
        fontState: 16,
    }

    changeFontSize = (number) => {
        this.setState({
            fontState: this.state.fontState + number,
        })
    }

    render() {
        return (
            <div className='container'>
                <h2>Tăng giảm font</h2>
                <button onClick={() => { 
                    // Gọi setState trong sự kiện click của button
                    // => Gán giá trị mới cho state khi click, render lại UI

                    this.changeFontSize(20);

                 }} className="btn btn-success">+</button>
                {/* <span style={{fontSize: '16px'}}>Text cần tăng giảm</span> */}
                <span style={{ fontSize: `${this.state.fontState}px` }}>Text cần tăng giảm</span>
                <button onClick={() => { 
                    this.changeFontSize(-20);
                 }} className="btn btn-danger">-</button>
            </div>
        )
    }
}
