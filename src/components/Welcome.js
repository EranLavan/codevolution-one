import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        // return <h3>Class Component</h3>
        const {name, heroName} = this.props
        //const {state1, state2} = this.state
        console.log('XXXXX')
        console.log(this.props.name)
        return <h4>Welcome {name} a.k.a {heroName}</h4>
    }
}

export default Welcome