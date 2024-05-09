import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import RegistrationForm from './RegistrationForm';
import Footer from './Footer';
import './App.css'; // Import Bootstrap CSS
import SuccessStories from './SuccessStories';
import Questions from './Quetions';
import Success from './Success';

function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/register' element={<RegistrationForm/>}></Route>
      <Route path='/success' element={<Success/>}></Route>
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
