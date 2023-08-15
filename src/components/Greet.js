import React from 'react'

// function Greet() {
//     return <h1>Hello, Menkalinan</h1>
// }

const Greet = props => {
    const {name, heroName} = props
    return (
        <div>
    <h2>Hello, {name} a.k.a {heroName}</h2>
        </div>
    )
}

export default Greet