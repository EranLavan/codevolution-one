import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello!'
      }
    //   this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'Goodbye!'
    //     })
    //     console.log(this)
    // }

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
        {/* <button onClick={this.clickHandler.bind(this)}>Click for Event Bind</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click for Event Bind</button> */}
        <button onClick={this.clickHandler}>Click for Event Bind</button>
      </div>
    )
  }
}

export default EventBind
