import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaUserGraduate, FaBook } from "react-icons/fa";

import instructor1 from "../assets/images/1.png";
import instructor2 from "../assets/images/2.png";
import instructor3 from "../assets/images/3.png";
import instructor4 from "../assets/images/4.png";

const instructors = [
  {
    name: "Masum Billah",
    title: "UI/UX Designer",
    students: "25+ Students",
    courses: "32 Courses",
    image: instructor1,
  },
  {
    name: "Munaim Billah",
    title: "UI/UX Designer",
    students: "25+ Students",
    courses: "32 Courses",
    image: instructor2,
  },
  {
    name: "Motasim Billah",
    title: "UI/UX Designer",
    students: "25+ Students",
    courses: "32 Courses",
    image: instructor3,
  },
  {
    name: "Ekram Hossain",
    title: "UI/UX Designer",
    students: "25+ Students",
    courses: "32 Courses",
    image: instructor4,
  },
];

const InstructorCards = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h5 className="text-primary fw-semibold mb-1">Talented Instructors</h5>
            <h2 className="fw-bold">Our Expert Instructors</h2>
          </div>
          <button className="btn btn-primary">View All</button>
        </div>

        <div className="row">
          {instructors.map((inst, idx) => (
            <div className="col-12 col-md-6 col-lg-3 mb-4" key={idx}>
              <div className="card instructor-card text-center p-4 border-0 shadow-sm h-100">
                <div className="position-relative instructor-img-wrapper mx-auto mb-3">
                  <img
                    src={inst.image}
                    alt={inst.name}
                    className="img-fluid"
                  />
                  <div className="social-icons-overlay">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaLinkedinIn /></a>
                  </div>
                </div>
                <h5 className="mt-2 mb-1 fw-semibold">{inst.name}</h5>
                <p className="text-muted mb-2">{inst.title}</p>
                <div className="small text-muted d-flex justify-content-center gap-3">
                  <span><FaUserGraduate className="me-1" />{inst.students}</span>
                  <span><FaBook className="me-1" />{inst.courses}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorCards;
