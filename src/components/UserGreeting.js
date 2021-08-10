import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(){
        super();
        this.state = {
            isLoggedIn : true
        }
    }

    render() {  
        // if(this.state.isLoggedIn){
        //     return <div>Welcome User</div>
        // } else {
        //     return <div>Welcome guest</div>
        // } 

        // return this.state.isLoggedIn ? <div>Welcome</div> : <div>Bye byee</div>

        return this.state.isLoggedIn && <div>Success</div>
    }
}

export default UserGreeting
