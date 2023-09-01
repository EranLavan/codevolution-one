import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log('PURE PURE PURE component render')
    return (
      <div>
        Pure Component {this.props.name}
      </div>
    )
  }
}

export default PureComp
