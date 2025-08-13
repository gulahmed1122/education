import React from 'react';
import '../../App.css';
import {
  FiUser,
  FiPlayCircle,
  FiDollarSign,
  FiHeadphones
} from 'react-icons/fi';

const Courses = () => {
  return (
    <section className="courses">
      <div className="courses-header text-center">
        <h5>Features</h5>
        <h2>One Platform Many Course</h2>
      </div>

      <div className="courses-grid">
        <div className="course-card">
          <div className="icon-circle">
            <FiUser className="course-icon" />
          </div>
          <h4>Exclusive Advisor</h4>
          <p>Lorem ipsum dolor amet consectetur</p>
        </div>

        <div className="course-card">
          <div className="icon-circle">
            <FiPlayCircle className="course-icon" />
          </div>
          <h4>Video Tutorial</h4>
          <p>Lorem ipsum dolor amet consectetur</p>
        </div>

        <div className="course-card">
          <div className="icon-circle">
            <FiDollarSign className="course-icon" />
          </div>
          <h4>Affordable Price</h4>
          <p>Lorem ipsum dolor amet consectetur</p>
        </div>

        <div className="course-card">
          <div className="icon-circle">
            <FiHeadphones className="course-icon" />
          </div>
          <h4>Life Time Support</h4>
          <p>Lorem ipsum dolor amet consectetur</p>
        </div>
      </div>
    </section>
  );
};

export default Courses;
