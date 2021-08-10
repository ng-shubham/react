import React, { Component } from 'react'

class BasicForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: '',
             topic: 'React'
        }
    }

    handleUsernemeChange = (event) => {
        this.setState({
            username : event.target.value
        }) 
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments : event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic : event.target.value
        })
    }    

    handleOnSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault();
    }

    render() {
        return (
            <div> 
                <form onSubmit={this.handleOnSubmit} >
                    <label>Username &nbsp;</label>    
                    <input type="text" value={this.state.username} onChange={this.handleUsernemeChange} /> 
                    <br />
                    <label>Comments &nbsp;</label>
                    <textarea value={this.state.comments} onChange={this.handleCommentsChange} />
                    <br />
                    <label>Choose a car:</label> 
                    <select value={this.state.topic} onChange={this.handleTopicChange} >
                        <option value="Angular">Angular</option>
                        <option value="React">React</option>
                        <option value="Vue">Vue</option> 
                    </select>
                    <button type="submit" >Submit</button>
                </form>
            </div>
        )
    }
}

export default BasicForm
