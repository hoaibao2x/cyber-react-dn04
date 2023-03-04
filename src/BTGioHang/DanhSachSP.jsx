import React, { Component } from 'react'
import SanPham from './SanPham'

export default class DanhSachSP extends Component {

  renderProList = () => {
    return this.props.phoneList.map((phone) => {
      return <div className="col-md-4" key={phone.maSP}>
        <SanPham phone={phone} addToCart={this.props.addToCart} />
      </div>
    })
  }

  render() {
    // console.log(this.props);
    return (
      <div className="row py-5">
        {this.renderProList()}
      </div>
    )
  }
}
