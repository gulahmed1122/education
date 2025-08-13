import React from 'react';
import '../../App.css';
import img1 from '../../assets/images/about.png';
const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-left">
        <img src={img1} alt="Student Learning" className="about-img top-img" />
        {/* <img src={img1} alt="Happy Student" className="about-img bottom-img" /> */}
      </div>

      <div className="about-right">
        <h5>About Us Education</h5>
        <h2>Go Your Skill in Next Level</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed turpis in arcu gravida faucibus euismod eget magna. Donec non justo ac libero pharetra congue. </p>
        <ul>
          <h3>Go Your Skill in Next Level</h3>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
         <h3>Our Success Mission</h3>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
        <button className="learn-btn">Learn More</button>
      </div>
    </section>
  );
};

export default AboutSection;
