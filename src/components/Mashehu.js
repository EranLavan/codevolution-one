import React, { Component } from 'react';

class Mashehu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  changeCount() {
    this.setState({
        count: 1,
    })
    console.log('The count was changed')
  }

  componentDidMount() {
    // Component lifecycle method
    // Executes after the component is mounted
    console.log('Component mounted');
  }

  render() {
    return (
      <div>
        <h1>My Component</h1>
        <p>Count: {this.state.count}</p>

        <button onClick={() => this.changeCount()}>Change Count</button>
      </div>
    );
  }
}

export default Mashehu