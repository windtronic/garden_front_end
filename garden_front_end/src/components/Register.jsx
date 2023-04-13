import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:8000/users/', {
      name: name,
      address: address,
      email: email,
      password: password,
    })
    .then(response => {
      console.log(response);
      // Clear form inputs
      setName('');
      setAddress('');
      setEmail('');
      setPassword('');
      // Navigate to Login page
      navigate('/login');
    })
    .catch(error => {
      console.error(error);
      setError('An error occurred while trying to register.');
    });
  }

  return (
    <div className="register-card">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={event => setName(event.target.value)} />

        <label htmlFor="address">Address:</label>
        <input type="text" id="address" value={address} onChange={event => setAddress(event.target.value)} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={event => setEmail(event.target.value)} />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={event => setPassword(event.target.value)} />

        {error && <div className="error">{error}</div>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}


export default Register;



