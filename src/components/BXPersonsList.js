import React from 'react'
import BXPerson from './BXPerson';

function BXPersonsList() {

  const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
  const persons = [
    {
        id: 1,
        name: 'Bruce',
        age: 30,
        skill: 'React'
    },

    {
        id: 2,
        name: 'Clark',
        age: 25,
        skill: 'Angular'
    },

    {
        id: 3,
        name: 'Diana',
        age: 28,
        skill: 'Vue'
    },
  ];

  const personList = persons.map(x => <BXPerson key={x.name} person={x} />)
  const nameList = names.map((name, anyindex) => <h3 key={anyindex}>{anyindex + 1}. {name}</h3>)

  return (
    <>
    <div>{personList}</div>
    <div>Alternatively,</div>
    <div>{nameList}</div>
      
    </>
  )
}

export default BXPersonsList
