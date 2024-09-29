// Login.js
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Send login request to the backend
    console.log({ username, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Username:</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
