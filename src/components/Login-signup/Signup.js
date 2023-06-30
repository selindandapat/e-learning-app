import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (fullName.trim() === '' || email.trim() === '' || password.trim() === '') {
      toast.error('Please fill in all the fields.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Invalid email');
      return;
    }
    const userData = {
      fullName,
      email,
      password,
    };

    try {
      toast.info('Registering...');
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success('Registration successful. You can now log in.');
      await new Promise((resolve) => setTimeout(resolve, 2000));

      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('isLoggedIn', true);
      navigate('/courseinfo');
    } catch (error) {
      toast.error('Registration failed.');
      console.error('Error during registration:', error);
    }
  };


  return (
    <div className='box'>
    <div className="form">
      <h1>Signup</h1>
      <form className="name-container" onSubmit={handleSubmit}>
        <div>
          <div className="input-container">
            <input type="text" placeholder='Full Name' value={fullName} onChange={(e) => setFullName(e.target.value)} />
          </div>
        </div>
        <div className="input-container">
          <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-container">
          <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='submit-btn'>
        <button className='submit' type="submit">
          Sign up
        </button>
        </div>
      </form>
      <p>
        Already signed up? <Link to="/">Login here</Link>
      </p>
      <ToastContainer />
    </div>
    </div>
  );
};

export default Signup