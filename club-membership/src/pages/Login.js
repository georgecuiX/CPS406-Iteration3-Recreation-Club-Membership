import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/index.css'
import Dancers from '../assets/dancers.png'

export const Login = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });

    const navigate = useNavigate(); // Create an instance of navigate

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials({
            ...credentials,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Attempting login with:', credentials);
        // Here you would typically handle the login, e.g., send the credentials to your server
        navigate('/memberHome'); // Use useNavigate() hook to redirect after login
    };

    const handleBack = () => {
        navigate('/'); // Navigate back to the WelcomeScreen
    };

    return (
        <div className=' bg-slate-300 h-screen overflow-hidden'>
            <Navbar />
            <div className='flex flex-row h-full'>
                <form className='flex flex-col box flex-2' onSubmit={handleSubmit}>
                    <div className='flex-1 flex flex-row items-end w-full justify-start pl-20'>
                        <h1 className=' text-center font-semibold text-6xl bg-green-100 py-1 px-2'>Sign In</h1>
                    </div>
                    <div className='flex-3 flex justify-center flex-col'>
                        <label>
                            <input
                                className=' w-96 h-12 rounded-2xl px-5 border-black focus:outline-none bg-blue-100'
                                type="text"
                                name="username"
                                placeholder='Username'
                                value={credentials.username}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <br />
                        <label>
                            <input
                                className=' w-96 h-12 rounded-2xl px-5 border-black focus:outline-none bg-blue-100'
                                type="password"
                                name="password"
                                placeholder='Password'
                                value={credentials.password}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <br />
                        {/* Add "Forgot your password?" link */}
                        <Link to='/forgotPassword' className=' text-gray-500 hover:text-blue-500'>Forgot password?</Link>
                        <br />
                        <div className='flex'>
                            <button type="button" className='px-4 py-4 rounded-xl bg-slate-400 border w-1/5 hover:bg-slate-500 transition' onClick={handleBack}>⬅</button>
                            <button type="submit" className='px-6 py-4 rounded-xl bg-green-400 border w-1/3 ml-20 hover:bg-green-500 transition'>Log In</button>
                        </div>
                    </div>
                </form>
                <div className='flex-3 w-full h-full'>
                    <img src={Dancers} alt="dancers" className=' object-cover' />
                </div>
            </div>
        </div>
    );
};
