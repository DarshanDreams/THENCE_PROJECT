import React, { useEffect, useState } from 'react';
import { useHistory, useNavigate } from 'react-router-dom'; // Import useHistory from react-router-dom
import './Success.css'; // Import CSS file for styling
import logo from './logo.png'; // Import your logo image

function Success() {
  const history = useNavigate(); // Get the history object from useHistory
  const [countdown, setCountdown] = useState(5); // Initialize countdown state

  useEffect(() => {
    const redirectTimer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1); // Decrement countdown value
    }, 1000);

    return () => clearInterval(redirectTimer); // Cleanup function to clear the interval
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      history('/'); // Redirect to the home page when countdown reaches 0
    }
  }, [countdown, history]);

  return (
    <div className="success-container">
      <img src={logo} alt="Logo" className="logo" />
      <h2 className="success-heading">Success Submitted!</h2>
      <h1>Congratulations!</h1>
      <p>Your message has been successfully submitted. Thank you for your submission.</p>
      <p className="redirect-message">Redirecting you to the home page in {countdown} seconds...</p>
    </div>
  );
}

export default Success;
