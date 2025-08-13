import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import img1 from '../../assets/images/101.jpg';
import img2 from '../../assets/images/102.jpg';
import img3 from '../../assets/images/103.jpg';
import img4 from '../../assets/images/104.jpg';
import img6 from '../../assets/images/106.jpg';

const courses = [
  {
    title: "Professional Ceramic Moulding for Beginners",
    price: "$50.00",
    image: img1,
    reviews: 21,
    students: 25,
    lessons: 15,
    time: "1.5 Hours",
    instructor: "Masum Billah",
    instructorImg: img6,
    tag: "JavaScript",
  },
  {
    title: "Basic Fundamentals of Interior & Graphics Design",
    price: "$50.00",
    image: img2,
    reviews: 21,
    students: 25,
    lessons: 15,
    time: "1.5 Hours",
    instructor: "Masum Billah",
    instructorImg: img6,
    tag: "Laravel",
  },
  {
    title: "WordPress for Beginners Master WordPress",
    price: "$50.00",
    image: img3,
    reviews: 21,
    students: 25,
    lessons: 15,
    time: "1.5 Hours",
    instructor: "Masum Billah",
    instructorImg: img6,
    tag: "PHP",
  },
  {
    title: "Advanced UI/UX Design with Figma",
    price: "$60.00",
    image: img4,
    reviews: 18,
    students: 30,
    lessons: 20,
    time: "2 Hours",
    instructor: "Sara Khan",
    instructorImg: img6,
    tag: "Figma",
  },
];

const PopularCourses = () => {
  return (
    <div className="container my-5">
      <p className="text-primary mb-2  fw-bold">Our Courses List</p>
      <h2 className="fw-bold mb-4">Most Popular Courses</h2>

      <div className="d-flex overflow-auto gap-4 pb-2 course-slider">
        {courses.map((course, idx) => (
          <div className="card course-card flex-shrink-0" key={idx}>
            <div className="position-relative">
              <img
                src={course.image}
                alt={course.title}
                className="card-img-top"
              />
              <span className="badge bg-primary price-badge">{course.price}</span>
            </div>
            <div className="card-body">
              <div className="d-flex align-items-center mb-2">
                <span className="text-warning me-1">★★★★★</span>
                <span className="text-muted small">({course.reviews})</span>
              </div>
              <h5 className="card-title">{course.title}</h5>
              <ul className="list-inline small text-muted mb-3">
                <li className="list-inline-item me-3">
                  <i className="bi bi-person"></i> {course.students} Students
                </li>
                <li className="list-inline-item me-3">
                  <i className="bi bi-file-earmark-text"></i> {course.lessons} Lessons
                </li>
                <li className="list-inline-item">
                  <i className="bi bi-clock"></i> {course.time}
                </li>
              </ul>
              <div className="d-flex justify-content-between align-items-center pt-2 border-top">
                <div className="d-flex align-items-center">
                  <img
                    src={course.instructorImg}
                    alt={course.instructor}
                    className="rounded-circle me-2"
                    width="30"
                    height="30"
                  />
                  <span className="small">{course.instructor}</span>
                </div>
                <span className="text-primary small">{course.tag}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
