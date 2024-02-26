import React, {useState} from 'react'

function AXHookCountersCombined() {

  const initialCount = 0
  const [count, setCount] = useState(initialCount)

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
        setCount(prevCount => prevCount + 1)
    }
  }

  return (
    <div>
      Count = {count}
        <button onClick={() => setCount(initialCount)}>RESET</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>INCREASE</button>
        <button onClick={incrementFive}>INCREASE FIVE</button>
    </div>
  )
}

export default AXHookCountersCombined
