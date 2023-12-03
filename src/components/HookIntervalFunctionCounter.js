import React, {useState, useEffect} from 'react'

function HookIntervalFunctionCounter() {

  const [count, setCount] = useState(0)

  const tick = () => {
    setCount(prevCount => prevCount + 1)
  }

  const someProp = count;

  useEffect(() => {

    function doSomething() {
        console.log(someProp)
    }

    doSomething()
    const interval = setInterval(tick, 200);
    return () => {
        clearInterval(interval)
    }
  }, [someProp])

  return (
    <div>
      {count}
    </div>
  )
}

export default HookIntervalFunctionCounter
