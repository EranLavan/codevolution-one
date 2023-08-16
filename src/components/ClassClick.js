import React, { Component } from 'react'

class classClick extends Component {

  clickHandler() {
    console.log('Clicked the button!')
  }

  mouseOverHandler() {
    console.log('Mouse was over the button!')
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler} onMouseOver={this.mouseOverHandler}>Click Me!</button>
      </div>
    )
  }
}

export default classClick
