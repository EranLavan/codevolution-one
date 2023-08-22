import React from 'react'
import Person from './Person';

function PersonsList() {
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
    const personList = persons.map(x => <Person key={x.name} person={x} />)
    //key prop SHOULD BE UNIQUE, but it isn't important whether 
    //it's ID or NAME or whatever as long as it's unique

  return (
    <div>{personList}</div>
  )
}

export default PersonsList
