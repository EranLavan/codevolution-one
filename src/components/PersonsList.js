import React from 'react'
import Person from './Person';

function PersonsList() {
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
    const personList = persons.map(x => <Person key={x.name} person={x} />)
    const nameList = names.map((name, anyindex) => <h3 key={anyindex}>{anyindex + 1}. {name}</h3>)
    //key prop SHOULD BE UNIQUE, but it isn't important whether 
    //it's ID or NAME or whatever as long as it's unique

  return (
    <>
    {/* WE NEED an "enclosing tag", hence <>all the stuff</>, 
    because return cannot work if there are multiple tags in it, 
    only with one "master tag"   */}
    <div>{personList}</div>
    <div>Alternatively,</div>
    <div>{nameList}</div>
    </>
  )
}

export default PersonsList
