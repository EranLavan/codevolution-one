import React, { Component } from 'react'

class BXEventBind extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       message: 'Hello!'
    }
  }
  
  clickHandler = () => {
    this.setState({
        message: 'Goodbye!'
    })
    console.log(this)
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>
            Click for Event Bind
        </button>
      </div>
    )
  }
}

export default BXEventBind
