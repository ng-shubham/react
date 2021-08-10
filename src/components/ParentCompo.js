import React, { Component } from 'react'
import ChildCompo from './ChildCompo';

class ParentCompo extends Component {

    constructor(){
        super();
        this.state = {
            message: 'Parent'
        }
        this.parentHandler = this.parentHandler.bind(this);
    }

    parentHandler(childName){
        alert(`Hello ${this.state.message} from ${childName}`)
    }

    render() {
        return (
            <div>
                <ChildCompo click={this.parentHandler} /> <br /> 
            </div>
        )
    }
}

export default ParentCompo
