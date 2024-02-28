import React, { useState } from 'react'

function AXHookCounterFourSecond() {

    const [items, setItems] = useState([])
    const addItem = () => {
        setItems([...items, {
            id: 1,
            value: 1
        }])
    }

  return (
    <div>
      <button onClick={addItem}>ADD ITEM</button>
      <ul>
        {
            items.map(item =>
                <li key={item.id}>{item.value}</li>)
        }
      </ul>
    </div>
  )
}

export default AXHookCounterFourSecond
