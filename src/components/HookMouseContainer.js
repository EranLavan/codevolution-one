import React, {useState} from 'react'
import HookFunctionMouse from './HookFunctionMouse';

function HookMouseContainer() {

  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <HookFunctionMouse />}
    </div>
  )
}

export default HookMouseContainer
