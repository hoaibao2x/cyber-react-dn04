import React, { Component } from 'react'
import { connect } from 'react-redux'


class KetQua extends Component {
    render() {
        console.log(this.props);
        let { banChon, tongBan, soBanThang } = this.props.game
        return (
            <div className="result">
                <p>BẠN CHỌN: <span className='text-danger'>{
                    banChon ? 'TÀI' : 'XỈU'
                }</span></p>
                <p>SỐ BÀN THẮNG: <span className='text-success'>{soBanThang}</span></p>
                <p>TỔNG SỐ BÀN CHƠI: <span className='text-info'>{tongBan}</span></p>
                <button className='btn btn-info' onClick={() => { 
                    let action = {
                        type: 'LAC_XUC_XAC'
                    }
                    this.props.dispatch(action);
                 }}>PLAY</button>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        game: rootReducer.gameReducer
    }
}


export default connect(mapStateToProps)(KetQua);