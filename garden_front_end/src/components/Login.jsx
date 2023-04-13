import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (email === 'fake@email.com' && password === 'fake123') {
      navigate('/');
    } else {
      setError('Invalid email or password.');
    }
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
