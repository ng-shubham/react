import React, { Component } from 'react'

class LifeCycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Shubham'
        }
        console.log("LifeCycleB Constructor");
    } 

    static getDerivedStateFromProps(props, state){
        console.log("LifeCycleB getDerivedStateFromProps");
        return null
    }

    componentDidMount(){
        console.log('LifeCycleB componentDidMount');
    }

    shouldComponentUpdate(){
        console.log('LifeCycleB shouldComponentUpdate');
        return true
    }

    getSnapshotBeforeUpdate(prevPros, prevState){
        console.log('LifeCycleB getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycleB componentDidUpdate');
    }

    render() {
        console.log('LifeCycleB render');
        return (
            <div>
                <label>LifeCycle A</label>
            </div>
        )
    }
}

export default LifeCycleB
