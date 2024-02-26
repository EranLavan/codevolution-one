import React, {useState} from 'react'

function AXHookCountersCombined() {

  const initialCount = 0
  const [count, setCount] = useState(initialCount)
  const [name, setName] = useState({firstName: '', lastName: ''})

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
        setCount(prevCount => prevCount + 1)
    }
  }

  return (
  <>
    <div>
      Count = {count}
        <button onClick={() => setCount(initialCount)}>RESET</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>INCREASE</button>
        <button onClick={incrementFive}>INCREASE FIVE</button>
    </div>

    <form>
      <input
        type="text"
        value={name.firstName}
        onChange={e => setName({ ...name, firstName: e.target.value})}
      />

      <input
        type="text"
        value={name.lastName}
        onChange={e => setName({ ...name, lastName: e.target.value})}
      />

      <h2>Your first name is {name.firstName}</h2>
      <h2>Your last name is {name.lastName}</h2>

      <h3>{JSON.stringify(name)}</h3>
    </form>

  </>
  )
}

export default AXHookCountersCombined
