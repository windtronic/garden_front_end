import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:8000/login/', {
      email: email,
      password: password
    })
    .then(response => response.data)
    .then(data => {
         console.log(data);
      if (data.success) {
        navigate('/main');
      } else {
        setError('Invalid email or password.');
      }
    })
    .catch(error => {
            console.log(error);
      setError('An error occurred while trying to log in.');
    });
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
