import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container">

        {/* Row 1: Subscribe input+btn left, Text right but left-aligned text */}
        <div className="row align-items-center mb-4">
          <div className="col-md-6 d-flex">
            <input
              type="email"
              className="form-control me-2"
              placeholder="Enter your email"
              style={{ maxWidth: "300px" }}
            />
            <button className="btn btn-primary">Subscribe</button>
          </div>

          <div className="col-md-6 text-md-start mt-3 mt-md-0">
            <h5>Subscribe to Our Newsletter</h5>
            <p className="mb-0">for Latest Update</p>
          </div>
        </div>

        {/* Description under the first row, full width */}
        <div className="row mb-5">
          <div className="col text-center">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit varius congue Morbi</p>
          </div>
        </div>

        {/* Row 2: Follow Us, Useful Links, Resources+Contact */}
        <div className="row">

          <div className="col-md-3 mb-4">
            <h5>Follow Us On :</h5>
            <ul className="list-unstyled">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>About Us</li>
              <li>Courses</li>
              <li>Categories</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5>Resources</h5>
            <ul className="list-unstyled">
              <li>Community</li>
              <li>Support</li>
              <li>Video Guides</li>
              <li>Terms and Conditions</li>
              <li>Blog</li>
              <li>Security</li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5>Contact Us</h5>
            <address>
              15 Rose Street<br />
              Harvey, IL 60426 USA<br />
              <br />
              Phone: <a href="tel:+17082109101" className="text-light">708-210-9101</a>
            </address>
          </div>

        </div>

        <hr className="border-light" />
        <div className="text-center">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
