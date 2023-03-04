import React, { Component } from 'react'

export default class SanPham extends Component {
  render() {
    let { phone, showDetail } = this.props;
    // let { hinhAnh } = this.props.phone;
    return (
      <div className="card">
        <img className="card-img-top" src={phone.hinhAnh} alt='phone__image' />
        <div className="card-body">
          <h4 className="card-title">{phone.tenSP}</h4>
          <p className='card-text'>{phone.giaBan}</p>
          <button onClick={() => {
            showDetail(phone)
          }} className="btn btn-success">Xem chi tiết</button>
        </div>
      </div>
    )
  }
}
