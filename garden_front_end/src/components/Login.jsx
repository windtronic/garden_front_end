import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (email == 'fake@email.com' && password == 'fake123') {
      navigate('/');
    } else {
      setError('Invalid email or password.');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="text" value={email} onChange={event => setEmail(event.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
      </label>
      <br />
       {error && <div>{error}</div>}
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
