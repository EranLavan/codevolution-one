import React from 'react'

function Person({person, anything}) {
  return (
    <div>
      <h3>{anything} I am {person.name}. I am {person.age} years old. My skill is {person.skill} </h3>
    {/* NOTE: anything is anything but not the prop "key"! */}
    </div>
  )
}

export default Person
