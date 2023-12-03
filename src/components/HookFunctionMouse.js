import React, { useState, useEffect } from 'react'

function HookFunctionMouse() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);


    const logMousePosition = e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mousemove', logMousePosition)

        return () => {
          console.log('Component unmounting code');
          window.removeEventListener('mousemove', logMousePosition)

        }
    }, [])

  return (
    <div>
      <h1>Hooks X = {x}</h1>
      <h1>Hooks Y = {y}</h1>
    </div>
  )
}

export default HookFunctionMouse
