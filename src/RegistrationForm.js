import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css'; // Import CSS file for styling
import logo from './logo.png'; // Import your logo image

function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const history = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    const enteredEmail = event.target.value;
    setEmail(enteredEmail);
    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(enteredEmail)) {
      setEmailError('Enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() !== '' && email.trim() !== '' && !emailError) {
      // Handle form submission here
      history('/success');
    }
  };

  const handleClose = () => {
    history('/');
  };

  
  return (
    <>
    <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" width={"50px"} height={"30px"} margin-left= {"10px"} margin-top= {"10px"}/>
        <button className="close-button" onClick={handleClose}>X</button>
      </div>
      <div className="registration-form-container" >
      <div className="form-content">
        <h2 className="form-title">Registration Form</h2>
        <p className="form-subtitle">Start your success journey here!</p>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input type="text" value={name} onChange={handleNameChange} placeholder="Enter your name" />
          </div>
          <div className="input-container">
            <input type="email" value={email} onChange={handleEmailChange} placeholder="Enter your email" />
            {emailError && <p className="error-message">{emailError}</p>}
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
    </>
    
  );
}

export default RegistrationForm;