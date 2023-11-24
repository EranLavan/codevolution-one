import React, { useState, useEffect } from 'react'

function HookFunctionCounterOne() {

  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Function Clicked {count} times</button>
    </div>
  )
}

export default HookFunctionCounterOne
