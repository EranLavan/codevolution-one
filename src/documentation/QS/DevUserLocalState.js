import React, { useState, useEffect } from 'react';

const DevUserLocalState = () => {
  const [user, setUser] = useState(null);


  useEffect(() => {
    fetchUserData().then((userData) => {
      setUser(userData);
    });
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Hello, {user.name}!</h1>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default DevUserLocalState