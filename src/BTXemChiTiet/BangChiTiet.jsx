import React, { Component } from 'react'

export default class BangChiTiet extends Component {
  render() {
    let {chiTietPhone} = this.props;
    return (
      <div className="row">
        <div className="col-md-4">
          <h3>{chiTietPhone.tenSP}</h3>
          <img className='img-fluid' src={chiTietPhone.hinhAnh} alt="" />
        </div>
        <div className="col-md-8">
          <h2>Thông số kỹ thuật</h2>
          <table className="table">
            <thead>
              <tr>
                <th />
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Màn hình</td>
                <td>{chiTietPhone.manHinh}</td>
              </tr>
              <tr>
                <td>HĐH</td>
                <td>{chiTietPhone.heDieuHanh}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
