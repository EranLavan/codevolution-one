import React from 'react'

const DevUserState = ({ user }) => {
  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Hello, {user.name}!</h1>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default DevUserState
