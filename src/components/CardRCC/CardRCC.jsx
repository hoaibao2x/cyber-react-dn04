// Class Component
// rcc: Tạo nhanh cú pháp component
import React, { Component } from 'react'

export default class CardRCC extends Component {
  // Phương thức giúp tạo UI của component
  render() {
    return (
      <div className="card text-white bg-danger">
        <img src="https://pixabay.com/get/g17db6122ead851abcac18a954d73a4fad59c6ba9a1c907608c57ac51ec4e781e44f2f78b6ba5fbccd95dd435e1c95ba9d5ec71af497572712189fddd983fc5b3_640.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

    )
  }
}
