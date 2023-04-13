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
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={event => setName(event.target.value)} />
      </label>
      <br />
      <label>
        Address:
        <input type="text" value={address} onChange={event => setAddress(event.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
      </label>
      <br />
      {error && <div>{error}</div>}
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;



