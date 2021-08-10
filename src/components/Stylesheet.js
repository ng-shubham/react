import React, { Component } from 'react';
import './myStyle.css';

class Stylesheet extends Component {
    render() {
        let className = this.props.primary ? 'primary': '';
        return (
            <div>
                <h1 className={`${className} font-md`} >My First React Project</h1>
            </div>
        )
    }
}

export default Stylesheet 
