import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Swal.fire({
      title: 'Registration Successful',
      text: 'You have been registered successfully!',
      icon: 'success',
      confirmButtonText: 'OK'
    });
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="username" 
          placeholder="Username" 
          value={formData.username} 
          onChange={handleChange} 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={formData.password} 
          onChange={handleChange} 
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
