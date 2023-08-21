import React from 'react'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana'];
    const nameList = names.map(heroname => <h3>{heroname}</h3>)
  return (<div>{nameList}</div>)
}

export default NameList
