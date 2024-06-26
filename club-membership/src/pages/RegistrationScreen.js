import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios'

const RegistrationScreen = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    role: 'member', // Default to 'member'
  });

  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate(); // Step 2: Create an instance of navigate

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { firstName, lastName, email, username, password, role } = formState;

    // Send data to backend for registration
    axios.post('http://localhost:3001/register', {
      firstName,
      lastName,
      email,
      username,
      password,
      role
    })
      .then(res => {
        // Redirect based on role
        if (role === 'member') {
          navigate('/member');
        } else if (role === 'admin') {
          navigate('/admin');
        } else if (role === 'coach') {
          navigate('/coach');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        // Set error message based on backend response
        if (error.response && error.response.data && error.response.data.error) {
          setErrorMessage(error.response.data.error);
        } else {
          setErrorMessage('An error occurred while processing your request');
        }
      });
  };

  const handleBack = () => {
    navigate('/'); // Navigate back to the WelcomeScreen
  };

  return (
    <div className='h-screen overflow-hidden'>
      <Navbar />
      <div className='flex flex-col items-center bg-gray-700 h-full'>
        <form onSubmit={handleSubmit} className="flex flex-col bg-white p-10 rounded-2xl px-28 py-16 mt-20">
          <div className='flex-1 flex flex-row w-full mb-8'>
            <h1 className='font-semibold text-xl bg-amber-100 py-1 px-2 reddit-mono'>Create An Account.</h1>
          </div>
          <div className='flex-2 flex justify-center flex-col items-center'>
            {errorMessage && <div className="text-red-500 float-left text-left mb-4">{errorMessage}</div>}
            <div className='flex'>
              <label>
                <input
                  className=' w-44 h-12 rounded-2xl px-5 border-black focus:outline-none bg-blue-100 mr-8'
                  type="text"
                  name="firstName"
                  placeholder='First Name'
                  value={formState.firstName}
                  onChange={handleChange}
                  required />
              </label>
              <br />
              <label>
                <input
                  className=' w-44 h-12 rounded-2xl px-5 border-black focus:outline-none bg-blue-100'
                  type="text"
                  name="lastName"
                  placeholder='Last Name'
                  value={formState.lastName}
                  onChange={handleChange}
                  required />
              </label>
            </div>
            <br />
            <label>
              <input
                className=' w-96 h-12 rounded-2xl px-5 border-black focus:outline-none bg-blue-100'
                type="email"
                name="email"
                placeholder='Email'
                value={formState.email}
                onChange={handleChange}
                required />
            </label>
            <br />
            <label>
              <input
                className=' w-96 h-12 rounded-2xl px-5 border-black focus:outline-none bg-blue-100'
                type="text"
                name="username"
                placeholder='Username'
                value={formState.username}
                onChange={handleChange}
                required />
            </label>
            <br />
            <label>
              <input
                className=' w-96 h-12 rounded-2xl px-5 border-black focus:outline-none bg-blue-100'
                type="password"
                name="password"
                placeholder='Password'
                value={formState.password}
                onChange={handleChange}
                required />
            </label>
            <br />
            <label className='flex justify-between w-full max-w-xs'>
              <div>
                <input
                  className='radio'
                  type="radio"
                  id="member"
                  name="role"
                  value="member"
                  checked={formState.role === "member"}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="member">Member</label>
              </div>
              <div>
                <input
                  className='radio'
                  type="radio"
                  id="coach"
                  name="role"
                  value="coach"
                  checked={formState.role === "coach"}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="coach">Coach</label>
              </div>
              <div>
                <input
                  className='radio'
                  type="radio"
                  id="admin"
                  name="role"
                  value="admin"
                  checked={formState.role === "admin"}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="admin">Admin</label>
              </div>
            </label>
          </div>
          <br />
          <div className='flex justify-center'>
            <button type="button" className='px-4 py-4 rounded-xl bg-slate-400 border w-1/5 hover:bg-slate-500 transition' onClick={handleBack}>⬅</button>
            <button type="submit" className='px-6 py-4 rounded-xl bg-yellow-300 border w-1/3 ml-20 hover:bg-green-200 transition'>Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationScreen;