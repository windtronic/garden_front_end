import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const credentials = {
      email,
      password,
    };
  
    axios.post('https://garden-api-un9v.onrender.com/users/', credentials)
      .then((response) => {
        // Assuming the backend returns a token or some authentication information
        const authToken = response.data.token;
        // Store the token in local storage or a secure cookie for future authenticated requests
  
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
