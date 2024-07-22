// src/components/BackToHomeButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackToHomeButton.css';  // Optional: For custom styling

const BackToHomeButton = () => {
  const navigate = useNavigate();

  return (
    <button className="back-to-home-button" onClick={() => navigate('/')}>
      Back to Home
    </button>
  );
};

export default BackToHomeButton;
