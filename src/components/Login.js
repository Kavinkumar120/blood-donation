import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Swal.fire({
      title: 'Login Successful',
      text: 'You are now logged in!',
      icon: 'success',
      confirmButtonText: 'OK'
    });
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="username" 
          placeholder="Username" 
          value={credentials.username} 
          onChange={handleChange} 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={credentials.password} 
          onChange={handleChange} 
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
