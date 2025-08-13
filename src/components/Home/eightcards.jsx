import React from 'react';
import '../../App.css';
import {

  FaCode,
  FaPaintBrush,
  FaMoneyBillWave,
  FaBullhorn,
  FaUserGraduate,
  FaDatabase,
  FaUsersCog,
  FaHeartbeat,
} from 'react-icons/fa';

const Courses = () => {
  return (
    <section className="courses">
      <div className="courses-header text-center">
        <h5>Browse Categories</h5>
        <h2>Explore Our Courses </h2>
      </div>

      <div className="courses-grid">
        <div className="course-card">
          <div className="icon-circle">
            <FaCode className="course-icon" />
          </div>
          <h4>Web Development</h4>
          <p style={{textDecoration:"underline"}}>58 Courses</p>
        </div>

        <div className="course-card">
          <div className="icon-circle">
            <FaPaintBrush className="course-icon" />
          </div>
          <h4>UI / UX Design</h4>
          <p style={{textDecoration:"underline"}}>87 Courses</p>
        </div>

        <div className="course-card">
          <div className="icon-circle">
            <FaMoneyBillWave className="course-icon" />
          </div>
          <h4>Finance Account</h4>
          <p style={{textDecoration:"underline"}}>130 Courses</p>
        </div>

        <div className="course-card">
          <div className="icon-circle">
            <FaBullhorn className="course-icon" />
          </div>
          <h4>Marketing</h4>
          <p style={{textDecoration:"underline"}}>65 Courses</p>
        </div>
        
      </div>

       <div className="courses-grid mt-5">
        <div className="course-card">
          <div className="icon-circle">
            <FaUserGraduate className="course-icon" />
          </div>
          <h4>Personal Development</h4>
          <p style={{textDecoration:"underline"}}>36 Courses</p>
        </div>

        <div className="course-card">
          <div className="icon-circle">
            <FaDatabase className="course-icon" />
          </div>
          <h4>Data Science</h4>
          <p style={{textDecoration:"underline"}}>19 Courses</p>
        </div>

        <div className="course-card">
          <div className="icon-circle">
            <FaUsersCog className="course-icon" />
          </div>
          <h4>Management</h4>
          <p style={{textDecoration:"underline"}}>42 Courses</p>
        </div>

       <div className="course-card">
  <div className="icon-circle">
    <FaHeartbeat className="course-icon" />
  </div>
  <h4>Health and Fitness</h4>
  <p style={{ textDecoration: "underline" }}>52 Courses</p>
</div>

        
      </div>
    </section>
  );
};

export default Courses;
