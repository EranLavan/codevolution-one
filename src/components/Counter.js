import React, { Component } from 'react'

class Counter extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }
  
  render() {
    return (
    <div>
      <div>
        Count - {this.state.count}
      </div>
      <button></button>
    </div>
    )
  }
}

export default Counter
