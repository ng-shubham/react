import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'; 

class LifeCycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Shubham'
        }
        console.log("LifeCycleA Constructor");
    } 

    static getDerivedStateFromProps(props, state){
        console.log("LifeCycleA getDerivedStateFromProps");
        return null
    }

    componentDidMount(){
        console.log('LifeCycleA componentDidMount');
    }

    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate');
        return true
    }

    getSnapshotBeforeUpdate(prevPros, prevState){
        console.log('LfeCycleA getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate');
    }

    changeState = () => {
        this.setState({
            name: 'Kunal'
        })
    }

    render() {
        console.log('LifeCycleA render');
        return (
            <div>
                <label>LifeCycle A</label>
                <button onClick={this.changeState}> change state</button>
                <LifeCycleB /> 
            </div>
        )
    }
}

export default LifeCycleA
