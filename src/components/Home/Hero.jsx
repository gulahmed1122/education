// src/components/Hero.jsx
import React from 'react';
import '../../App.css';
import heroImg from '../../assets/images/banner.png'; 
import Happystu from '../../assets/images/groupimg.png';
// import usersImg from '../assets/images/users.png'; // group of user icons

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2 className="hero-tagline">Online E-Learing Courses</h2>
       <span>
         <h1 className="hero-heading">Creating a Better Future through Education</h1>
         </span>
        <p className="hero-text">
            It is long established fact that reader distracted by the readable content.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">All Courses</button>
          <button className="btn-outline">Contact Us</button>
        </div>

        <div className="hero-customers">
          <img src={Happystu} alt="Happy Customers" />
          <span>5,000+ happy students joined us</span>
        </div>
      </div>

      <div className="hero-image">
        <img src={heroImg} alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;
