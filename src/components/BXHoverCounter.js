import React, { Component } from 'react';
import withCounter from './withCounter';
import HoverCounter from './HoverCounter';

class BXHoverCounter extends Component {

  render() {
    const { count, incrementCount } = this.props;
    return (
      <div onMouseOver={incrementCount}>
        <h1>Hovered {count} times</h1>
        
      </div>
    )
  }
}

export default withCounter(HoverCounter, 10)