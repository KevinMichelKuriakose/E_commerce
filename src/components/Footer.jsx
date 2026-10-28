
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row g-4">

          {/* Brand */}
          <div className="col-md-4">
            <Link
              to="/home"
              className="text-decoration-none fw-bold fs-3 text-white"
            >
              Mich<span className="text-warning">.co</span>
            </Link>

            <p className="text-secondary small mt-2">
              PREMIUM TECHNOLOGY
            </p>

            <p className="text-secondary">
              Discover quality products and a better shopping
              experience with Mich.co.
            </p>

            <div className="d-flex gap-3 mt-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="text-warning fs-5"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="text-warning fs-5"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                className="text-warning fs-5"
                aria-label="YouTube"
              >
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-2">
            <h5 className="fw-bold mb-3">Quick Links</h5>

            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/home" className="text-secondary text-decoration-none">
                  Home
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/products" className="text-secondary text-decoration-none">
                  Products
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/about" className="text-secondary text-decoration-none">
                  About Us
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/contact" className="text-secondary text-decoration-none">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-6 col-md-3">
            <h5 className="fw-bold mb-3">Customer Service</h5>

            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/cart" className="text-secondary text-decoration-none">
                  My Cart
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/" className="text-secondary text-decoration-none">
                  Login
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/contact" className="text-secondary text-decoration-none">
                  Help & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Shop with Mich.co</h5>

            <p className="text-secondary">
              Find something you love. Explore our latest products today.
            </p>

            <Link to="/products" className="btn btn-warning fw-bold">
              Shop Now
              <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <p className="text-secondary small mb-0">
            © {new Date().getFullYear()} Mich.co. All rights reserved.
          </p>

          <p className="text-secondary small mb-0">
            Premium Technology
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
