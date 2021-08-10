import React, { Component } from 'react';

class Message extends Component {

    constructor(){
        super();
        this.state = {
            message: 'Welcome visitor'
        }
    }

    changeMessage(){
        this.setState({
            message: 'Thank you for subscribing'
        })
    }

    render(){
        return(
            <div>
                <h2 style={{color: "red"}}>{ this.state.message }</h2>
                <button onClick={() => this.changeMessage()}>Subscribe</button><br /><br />
            </div>
        )
    }
}

export default Message;