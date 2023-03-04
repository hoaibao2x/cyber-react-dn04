import React, { Component } from 'react'
import CardRCC from '../../CardRCC/CardRCC'

export default class ContentComponent extends Component {
  render() {
    return (
      <div className="col-8 content">
        <h2>Content Component</h2>
        <div className="row container-fluid">
          <div className="col-3">
            <CardRCC />
          </div>
          <div className="col-3">
            <CardRCC />
          </div>
          <div className="col-3">
            <CardRCC />
          </div>
          <div className="col-3">
            <CardRCC />
          </div>
        </div>
      </div>
    )
  }
}
