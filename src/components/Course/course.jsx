import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../index.css";
import Footer from "../Home/footer";
import { FaStar } from "react-icons/fa";

import bgimg from "../../assets/images/banner.jpg";

import courseImg1 from "../../assets/images/101.jpg";
import courseImg2 from "../../assets/images/102.jpg";
import courseImg3 from "../../assets/images/103.jpg";
import courseImg4 from "../../assets/images/104.jpg";
import courseImg5 from "../../assets/images/51.jpg";
import courseImg6 from "../../assets/images/53.jpg";

import profileImg1 from "../../assets/images/1.png";
import profileImg2 from "../../assets/images/2.png";
import profileImg3 from "../../assets/images/3.png";
import profileImg4 from "../../assets/images/4.png";
import profileImg5 from "../../assets/images/1.png";
import profileImg6 from "../../assets/images/3.png";

export default function CoursesHeader() {
  // Courses array with different images etc.
  const courses = [
    {
      img: courseImg1,
      price: "$50.00",
      stars: 4.5,
      title: "Financial Security Thinking and Principles Theorys",
      students: 25,
      lessons: 15,
      hours: "1.5 Hours",
      authorImg: profileImg1,
      authorName: "John Doe",
      courseTag: "React",
    },
    {
      img: courseImg2,
      price: "$40.00",
      stars: 4.0,
      title: "Introduction to UX Design",
      students: 30,
      lessons: 10,
      hours: "2 Hours",
      authorImg: profileImg2,
      authorName: "Jane Smith",
      courseTag: "UX",
    },
    {
      img: courseImg3,
      price: "$60.00",
      stars: 5.0,
      title: "Mastering Java Programming",
      students: 40,
      lessons: 20,
      hours: "3 Hours",
      authorImg: profileImg3,
      authorName: "Alice Johnson",
      courseTag: "Java",
    },
    {
      img: courseImg4,
      price: "$45.00",
      stars: 4.3,
      title: "Advanced React Concepts",
      students: 28,
      lessons: 18,
      hours: "2.5 Hours",
      authorImg: profileImg4,
      authorName: "Bob Martin",
      courseTag: "React",
    },
    {
      img: courseImg5,
      price: "$55.00",
      stars: 4.8,
      title: "UI Design Fundamentals",
      students: 35,
      lessons: 12,
      hours: "1.8 Hours",
      authorImg: profileImg5,
      authorName: "Clara Lee",
      courseTag: "UX",
    },
    {
      img: courseImg6,
      price: "$65.00",
      stars: 5.0,
      title: "Fullstack Web Development",
      students: 50,
      lessons: 25,
      hours: "4 Hours",
      authorImg: profileImg6,
      authorName: "David Kim",
      courseTag: "Fullstack",
    },
  ];

  return (
    <>
      {/* Banner Section - Navbar ke neeche */}
      <section
        className="course-banner-section d-flex align-items-center justify-content-center text-white text-center"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <div className="overlay"></div>
        <div className="content position-relative z-1 px-3 py-5">
          <h1 className="fw-bold">Course</h1>
          <p className="mt-2 fw-bold">
            Home <span className="mx-2">⇒</span> Course
          </p>
        </div>
      </section>

      {/* Cards Section - alag alag images ke saath */}
      <div className="container py-5">
        <div className="row g-4">
          {courses.map((course, index) => (
            <div className="col-md-4" key={index}>
              <div className="card shadow-sm border-0">
                <div className="position-relative">
                  <img src={course.img} className="card-img-top" alt="Course" />
                  <span className="price-badge px-3 py-1">{course.price}</span>
                </div>

                <div className="card-body">
                  <div className="mb-2 text-warning">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <h6 className="fw-bold">{course.title}</h6>

                  <p className="small text-muted mb-3">
                    {course.students} Students &nbsp;|&nbsp; {course.lessons} Lessons &nbsp;|&nbsp; {course.hours}
                  </p>

                  <hr />

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <img
                        src={course.authorImg}
                        alt="Author"
                        className="rounded-circle me-2"
                        width="40"
                        height="40"
                      />
                      <span>{course.authorName}</span>
                    </div>
                    <span className="badge bg-primary">{course.courseTag}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer - last me */}
      <Footer />
    </>
  );
}
