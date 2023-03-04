import React, { Component } from 'react'
import FormDK from './FormDK'
import TableUsers from './TableUsers'

export default class QLUser extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Quản lý người dùng</h1>
        <FormDK />
        <TableUsers />
      </div>
    )
  }
}
