import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }


    // login = () => {
    //     this.setState({
    //         isLoggedIn: true
    //     })
    // }
    
    

  render() {
 //   <button onClick={login()}>Login if you want</button>

    if (this.state.isLoggedIn) {
        return (
            <div>
                Welcome, Menkalinan
            </div>
        )
    } else {
        return (
            <div>
                Welcome, Guest
            </div>
        )
    }
    } 
  }

export default UserGreeting
