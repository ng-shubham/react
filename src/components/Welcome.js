import React, { Component } from 'react';

class Welcome extends Component {
    render(){
        console.log(this.props.name);
        return <h1>Welcome {this.props.name} and your degree is {this.props.degree} </h1>
    }
}

export default Welcome;