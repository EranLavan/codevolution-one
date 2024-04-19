import React from 'react'

let content;

if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />
}

function ConditionalRenderingIf() {
  return (
    <div>
      {content}
    </div>
  );
}

export default ConditionalRenderingIf
