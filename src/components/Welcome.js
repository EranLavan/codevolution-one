import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        // return <h3>Class Component</h3>
        console.log('XXXXX')
        console.log(this.props.name)
        return <h4>Welcome {this.props.name} a.k.a {this.props.heroName}</h4>
    }
}

export default Welcome