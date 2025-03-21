import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                const user = await response.json();

                // Store the username and other relevant data in local storage
                localStorage.setItem('username', user.username);
                localStorage.setItem('shoppingCart', JSON.stringify(user.shopping_cart));

                // Optionally, dispatch a custom event to notify other components
                window.dispatchEvent(new Event('storage'));

                setMessage('Login successful!');
                // Redirect to the Home page
                navigate('/');
            } else {
                const errorText = await response.text();
                setMessage(`Login failed: ${errorText}`);
            }
        } catch (error) {
            console.error('Error during login:', error);
            setMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label style={{color: 'white'}} htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label style={{color: 'white'}} htmlFor="password">Password:</label>
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
            {message && <p style={{color: 'white'}}>{message}</p>}
        </div>
    );
};
