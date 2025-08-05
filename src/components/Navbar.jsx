import React from 'react';
import '../App.css';
import logo from '../assets/images/logo.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="logo">
        <img src={logo} alt="Edumon Logo" />
      </div>

      {/* Center: Nav Links */}
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#courses">Courses</a></li>
        <li><a href="#pages">Pages</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Right: Icons + Button */}
      <div className="nav-right-box">
        <div className="nav-icons">
          <i className="bi bi-search"></i>
          <i className="bi bi-bag"></i>
        </div>
        <button className="btn btn-light login-btn">Login / Register</button>
      </div>
    </nav>
  );
};

export default Navbar;
