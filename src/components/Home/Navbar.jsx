import React from 'react';
import '../../App.css';
import logo from '../../assets/images/logo.svg';
import { NavLink } from "react-router-dom";




const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="logo">
        <img src={logo} alt="Edumon Logo" />
      </div>

      {/* Center: Nav Links */}
 <ul className="nav-links">
  <li>
    <NavLink to="/">Home</NavLink>
  </li>
  <li>
    <NavLink to="/courses">Course</NavLink>
  </li>
  <li>
  <NavLink to="/pages">Pages</NavLink>
</li>
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
