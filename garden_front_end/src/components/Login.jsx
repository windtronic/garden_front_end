import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const credentials = {
      email,
      password,
    };

    console.log(credentials)

    axios.post('https://garden-api-un9v.onrender.com/login/', credentials)
      .then(response => {
        // Handle success response
        console.log(response.data);
      })
      .catch(error => {
        // Handle error response
        console.error(error);
        setError('Invalid email or password.');
      });
  }

  return (
    <div className="login-card">
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="text" value={email} onChange={event => setEmail(event.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
        </label>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;


