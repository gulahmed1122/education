import React from 'react'
import bgimg from "../../assets/images/banner.png";


const aboutpage = () => {
  return (
<section
        className="course-banner-section d-flex align-items-center justify-content-center text-white text-center"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <div className="overlay"></div>
        <div className="content position-relative z-1 px-3 py-5">
          <h1 className="fw-bold">Course</h1>
          <p className="mt-2 fw-bold">
            Home <span className="mx-2">⇒</span> Pages
          </p>
        </div>
      </section>

  );
};

export default aboutpage



 