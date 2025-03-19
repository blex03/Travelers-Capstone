// LoginButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginButton = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <button
      onClick={handleLoginClick}
      style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      Login
    </button>
  );
};
