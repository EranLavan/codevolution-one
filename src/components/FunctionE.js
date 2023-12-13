import React, { useContext } from 'react'
// import FunctionF from './FunctionF'
import { UserContext, ChannelContext } from '../App'

function FunctionE() {

  const user = useContext(UserContext);
  const channel = useContext(ChannelContext)

  return (
    <div>
      {user} - {channel}
    </div>
  )
}

export default FunctionE
