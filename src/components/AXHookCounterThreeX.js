import React, { useState } from 'react'

function AXHookCounterThreeX() {

  const [name, setName] = useState({firstName: '', lastName: ''})

  return (
    <form>
      <input
        type="text"
        value={name.firstName}
        onChange={e => setName({ ...name, firstName: e.target.value})}
      />

    </form>
  )
}

export default AXHookCounterThreeX
