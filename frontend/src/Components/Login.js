import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import './Login.css'; // Ensure this path is correct

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    Axios.defaults.withCredentials = true;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Please fill all the fields');
            return;
        }
        Axios.post('http://localhost:3000/auth/login', {
            email,
            password
        }).then(response => {
            if (response.data.status) {
                navigate('/');
            }
        }).catch(err => {
            console.error('Error during login:', err); // Log the error
            setError('User not found, please try again ');
        });
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Login</button>
                    <div>
                        <p>Don't have an account?</p>
                        <button
                            type="button"
                            onClick={() => navigate('/signup')}
                        >
                            Sign Up
                        </button>
                    </div>
                    {error && <p className="error">{error}</p>}
                </form>
            </div>
        </div>
    );
}
