// src/LoginPage.js
import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom'; // To navigate to different routes

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useUser();
    const navigate = useNavigate();
    var id = ""

    const handleLogin = (e) => {
        e.preventDefault();

        // Replace with your login API call
        // Example using fetch:
        fetch('/api/Users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, email, password })
        })
            .then(data => {
                if (data.ok) {
                    console.log(email)
                    setUser(email);
                    navigate('/bookshelves'); // Redirect to profile or any other page
                } else {
                    alert('Login failed');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            });
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>

            <div>
                <a href="/register">Don't have ann account?</a>
            </div>
        </div>
    );
}

export default LoginPage;
