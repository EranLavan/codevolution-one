import React from 'react'

function BXPerson({person, anything}) {
  return (
    <div>
      <h3>{anything} I am {person.name}. I am {person.age} years old. My skill is {person.skill}</h3>
    </div>
  )
}

export default BXPerson
