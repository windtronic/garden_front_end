import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const registeredEmail = location.state && location.state.registeredEmail; // Retrieve the registered email from the location state
  const registeredPassword = location.state && location.state.registeredPassword; // Retrieve the registered password from the location state

  // Set the registered email and password as initial values in the login form
  useState(() => {
    if (registeredEmail && registeredPassword) {
      setEmail(registeredEmail);
      setPassword(registeredPassword);
    }
  }, [registeredEmail, registeredPassword]);

  function handleSubmit(event) {
    event.preventDefault();
    const credentials = {
      email,
      password,
    };

    axios
      .post('https://garden-api-un9v.onrender.com/login/', credentials)
      .then(response => {
        console.log(response.data);
        // Handle successful login
        navigate('/'); // Redirect to the home page or another authorized page
      })
      .catch(error => {
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


