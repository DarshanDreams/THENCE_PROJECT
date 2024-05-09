// Navbar.js
import React from 'react';
import logo from './logo.png'; // Import your logo image
import { Link } from 'react-router-dom';
import './Navbar.css'; 


function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="right">
      <Link to="/register" className="button nav-link" >Get Project</Link>
      <Link to="/" className="button black nav-link" >On Board Talent</Link>
      </div>
    </div>
  );
}



export default Navbar;
