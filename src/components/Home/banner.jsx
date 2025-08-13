import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../index.css";
import bannerImg from "../../assets/images/working.png";


const BannerSection = () => {
  return (
    <section
      className="custom-banner-section d-flex align-items-center justify-content-center text-white text-center"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      {/* Overlay */}
      <div className="overlay"></div>

      {/* Content on top */}
      <div className="content position-relative z-1 px-3 py-5">
        <h5 className="text-primary mb-3">Working Process</h5>
        <h2 className="fw-bold mb-5">How Does It Work</h2>

        <div className="row justify-content-center gap-5">
          <div className="col-md-2">
            <div className="text-white text-center">
              <i className="bi bi-book fs-1 text-primary"></i>
              <h5 className="mt-3">Choose A Course</h5>
              <p className="small">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="text-white text-center">
              <i className="bi bi-cart fs-1 text-primary"></i>
              <h5 className="mt-3">Purchase A Course</h5>
              <p className="small">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="text-white text-center">
              <i className="bi bi-rocket fs-1 text-primary"></i>
              <h5 className="mt-3">Start Now</h5>
              <p className="small">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
