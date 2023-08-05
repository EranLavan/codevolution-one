// this will be a CLASS component as well

import React, { Component } from 'react';

class Countergpt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    // Component lifecycle method
    // Executes after the component is mounted
    console.log('Component mounted');
  }

  render() {
    return (
      <div>
        <h2>Countergpt</h2>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

export default Countergpt