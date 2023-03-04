import React, { Component } from 'react'
import SanPhamRedux from './SanPhamRedux'

export default class DanhSachRedux extends Component {

  renderPhoneList = () => {
    return this.props.phoneList.map((phone) => {
      return <div className='col-md-4' key={`phone-${phone.maSP}`}>
        <SanPhamRedux phone={phone}/>
      </div>
    })
  }

  render() {
    return (
      <div className='row py-5'>
        {this.renderPhoneList()}
      </div>
    )
  }
}
