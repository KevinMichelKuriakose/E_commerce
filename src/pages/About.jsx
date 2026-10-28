
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  return (
    <div className="ABOUT">
      {/* Hero Section */}
      <section
        className="text-white text-center py-5"
        style={{ backgroundColor: "#111827" }}
      >
        <div className="container py-4">
          <span className="badge bg-warning text-dark mb-3 px-3 py-2">
            WHO WE ARE
          </span>

          <h1 className="display-4 fw-bold">
            About <span className="text-warning">Mich.co</span>
          </h1>

          <p className="lead text-light mt-3 mb-0">
            Premium technology. Quality products. Better shopping.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <div
              className="rounded-4 p-5 text-center"
              style={{
                background: "linear-gradient(135deg, #111827, #374151)",
                minHeight: "300px",
              }}
            >
              <i className="bi bi-laptop display-1 text-warning"></i>

              <h2 className="text-white fw-bold mt-4">
                Mich<span className="text-warning">.co</span>
              </h2>

              <p className="text-light">
                Your technology shopping destination
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <span className="text-warning fw-bold">
              OUR STORY
            </span>

            <h2 className="fw-bold mt-2 mb-3">
              Making Shopping Simple
            </h2>

            <p className="text-secondary">
              Mich.co is an e-commerce website designed to make
              discovering and exploring products simple and convenient.
              We bring products together in one place so customers can
              browse, compare, and choose what they like.
            </p>

            <p className="text-secondary">
              Our goal is to provide a clean shopping experience,
              straightforward navigation, and an easy way to explore
              different product categories.
            </p>

            <Link
              to="/products"
              className="btn btn-warning fw-bold mt-2"
            >
              Explore Products
              <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission, Vision and Values */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">
              What Drives <span className="text-warning">Us</span>
            </h2>

            <p className="text-muted">
              The principles behind the Mich.co experience.
            </p>
          </div>

          <div className="row g-4">
            {/* Mission */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="mb-3">
                  <i className="bi bi-bullseye display-4 text-warning"></i>
                </div>

                <h4 className="fw-bold">Our Mission</h4>

                <p className="text-secondary mb-0">
                  To make online product discovery simple, convenient,
                  and enjoyable for everyone.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="mb-3">
                  <i className="bi bi-eye display-4 text-warning"></i>
                </div>

                <h4 className="fw-bold">Our Vision</h4>

                <p className="text-secondary mb-0">
                  To build a user-friendly shopping destination where
                  customers can discover products with ease.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="mb-3">
                  <i className="bi bi-heart display-4 text-warning"></i>
                </div>

                <h4 className="fw-bold">Our Values</h4>

                <p className="text-secondary mb-0">
                  Simplicity, usability, and a focus on creating a
                  positive shopping experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section
        className="text-white text-center py-5"
        style={{ backgroundColor: "#111827" }}
      >
        <div className="container">
          <h2 className="fw-bold">
            Ready to Explore?
          </h2>

          <p className="text-light mt-3">
            Discover your next favourite product with Mich.co.
          </p>

          <Link
            to="/products"
            className="btn btn-warning fw-bold px-4 py-2 mt-2"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;
