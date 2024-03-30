import React, { Component } from 'react'

class BXMessage extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       message: 'Welcome, Visitor'
    }
  }

  changeMessage() {
    this.setState({
        message: 'Thank you for subscribing!'
    })
  }
  

  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    )
  }
}

export default BXMessage
