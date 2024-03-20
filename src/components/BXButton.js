import React from 'react'

function BXButton({ handleClick, children }) {
  console.log('Rendering button -', children)
  return (
    <div>
      <button onClick={handleClick}>
        {children}
      </button>
    </div>
  )
}

export default BXButton
