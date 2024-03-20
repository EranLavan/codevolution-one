import React, { Component } from 'react'

class BXCounter extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       count: 0,
    }
  }

  increment() {
    this.setState(
      (prevState, props) => ({
        count: prevState.count + 1
      }),

    () => {
        console.log('Callback value', this.state.count)
    })
  }

  incrementFive() {
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }
  

  render() {
    return (
      <div>
        <div>
            Count = {this.state.count}
        </div>
        <button onClick={() => this.incrementFive()}>
            Increment 5
        </button>
      </div>
    )
  }
}

export default BXCounter
