import React from 'react';

const DevUserConditionalRendering = ({ user }) => {
  return user ? (
    <div>
      <h1>Hello, {user.name}!</h1>
      <p>Email: {user.email}</p>
    </div>
    ) : (
      <div>Loading...</div>
    );
};

export default DevUserConditionalRendering