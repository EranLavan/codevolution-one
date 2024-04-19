import React from 'react'

function ConditionalRenderingT() {
  return (
    <div>
      {isLoggedIn ? (
        <AdminPanel />
      ) : (
        <LoginForm />
      )}
    </div>
  )
}

export default ConditionalRenderingT
