import React, { Component } from 'react';

// code css ứng dụng cho toàn web
import './demoStyling.css';

// Import loại file module css
import styleModule from './StyleComponent.module.css';

export default class DemoStyling extends Component {
    render() {

        let styleObj = {
            color: 'hotpink',
            backgroundColor: 'yellow'
        }

        return (
            <div>
                <p className={styleModule.styleFontSize}>demo module CSS</p>

                {/* Code CSS chỉ có tác dụng riêng ở 1 component */}
                {/* Inline CSS */}
                <p style={styleObj}>Inline CSS</p>
                <p style={{fontSize: '40px'}}>Inline CSS</p>

                {/* External CSS - Import CSS */}
                <p className='demoCSS'>DemoStyling</p>

                <p className={`${styleModule.styleFontSize} ${styleModule['color-red']}`}>Demo nhiều class name</p>
            </div>
        )
    }
}
