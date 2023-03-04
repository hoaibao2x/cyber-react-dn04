import React, { Component } from 'react'

export default class DoiMauXe extends Component {

    state = {
        imgURL: './img/products/black-car.jpg',

    }

    changeColor = (color) => {
        this.setState({
            imgURL: `./img/products/${color}-car.jpg`,
        })
    }


    render() {
        return (
            <div>
                <div className="container">
                    <h2>Đổi màu xe</h2>
                    <div className="row">
                        <div className="col-md-8">
                            <img className='container-fluid' src={this.state.imgURL} alt='car' />
                        </div>
                        <div className="col-md-4">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <button onClick={() => { 
                                        this.changeColor('black')
                                     }} className='btn btn-dark'>Dark</button>
                                </li>
                                <li className="nav-item">
                                    <button onClick={() => { 
                                        this.changeColor('red');
                                     }} className='btn btn-danger'>Red</button>
                                </li>
                                <li className="nav-item">
                                    <button onClick={() => { 
                                        this.changeColor('silver')
                                     }} className='btn btn-light'>Silver</button>
                                </li>
                                <li className="nav-item">
                                    <button onClick={() => { 
                                        this.changeColor('steel')
                                     }} className='btn btn-secondary'>Steel</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
