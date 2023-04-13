import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Register() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


    useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get(`http://localhost:8000/users/`);
      console.log(response.data)
      setUsers(response.data);
    };
    getUsers();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { name, address, email, password };
    axios.post('http://localhost:8000/users/', user)
      .then(response => {
        setUsers([...users, response.data]);
        setName('');
        setAddress('');
        setEmail('');
        setPassword('');
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h1>Login</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label>
          Address:
          <input type="text" value={address} onChange={(event) => setAddress(event.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;

