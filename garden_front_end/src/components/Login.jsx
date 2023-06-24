import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const credentials = {
      email,
      password,
    };

    axios
      .post('https://garden-api-un9v.onrender.com/login/', credentials, { withCredentials: true })
      .then(() => {
        // Redirect the user to the home page or another authorized page
        navigate('/');
      })
      .catch((error) => {
        setError('Invalid email or password.');
      });
  }

  return (
    <div className="login-card">
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

