import React, { Component } from 'react'

export default class DataBinding extends Component {

  // Thuộc tính của class
  foodInfo = {
    name: 'Pizza Hải Sản',
    avatar: 'https://pixabay.com/get/g0c9e878e38f01ecca6cedb087d6a33cb26ea03ab1df1ef62f5244e4013e4afa13a75b84090024c5bc05a290727c71a7a21ac45c60f8642f663d06c27a036ee74_640.jpg',
    price: 2000
  }

  renderFood = () => {
    // Trả về đối tượng jsx
    //! Thẻ mở luôn nằm chung hàng với return
    //! Nếu muốn xuống dòng thì return + ()
    return <div className="card">
      <img src={this.foodInfo.avatar} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{this.foodInfo.name}</h5>
        <p className="card-text">
          {this.foodInfo.price}
        </p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  }

  render() {

    // Biến trong hàm
    let username = 'user01';

    return (
      <div className="container">
        {/* {}: Dấu binding dữ liệu */}
        <h1>Hello {username}!</h1>
        <img src={this.foodInfo.avatar} alt="" />

        <div className="col-4">
          <div className="card">
            <img src={this.foodInfo.avatar} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{this.foodInfo.name}</h5>
              <p className="card-text">
                {this.foodInfo.price}
              </p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>

        </div>

        <div className="col-4">
          {this.renderFood()}
        </div>

      </div>
    )
  }
}
