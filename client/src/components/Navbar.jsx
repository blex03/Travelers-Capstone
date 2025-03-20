import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../Navbar.css';

export const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Function to check login state from local storage
        const checkLoginState = () => {
            const isUserLoggedIn = localStorage.getItem('username') !== null;
            setIsLoggedIn(isUserLoggedIn);
        };

        // Check login state on component mount
        checkLoginState();

        // Add event listener for storage changes
        window.addEventListener('storage', checkLoginState);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('storage', checkLoginState);
        };
    }, []);

    const handleLogin = () => {
        // Simulate login by setting a value in local storage
        localStorage.setItem('username', 'user');
        setIsLoggedIn(true);
        navigate('/'); // Navigate to the homepage or desired route
    };

    const handleLogout = () => {
        // Clear the specific user data from local storage
        localStorage.removeItem('username');
        setIsLoggedIn(false);
        navigate('/login'); // Redirect to the login page
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                {/* Add your logo here if needed */}
            </div>
            <ul className="navbar-links">
                {isLoggedIn ? (
                    <li><button onClick={handleLogout}>Logout</button></li>
                ) : (
                    <li><button onClick={handleLogin}>Login</button></li>
                )}
                <li><Link to="/checkout">Cart</Link></li>
            </ul>
        </nav>
    );
};
