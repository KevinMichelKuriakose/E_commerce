
import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Home() {
  const navigate = useNavigate();

  const slides = [
    {
      label: "PREMIUM TECHNOLOGY",
      title: "Discover Your Next Favourite",
      highlight: "Product",
      description:
        "Explore quality products and find something you'll love at Mich.co.",
      image:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1400&q=80",
      button: "Explore Products",
    },
    {
      label: "UPGRADE YOUR TECH",
      title: "Technology Made",
      highlight: "Simple",
      description:
        "Discover electronics and accessories for your everyday needs.",
      image:
        "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&w=1400&q=80",
      button: "Shop Electronics",
    },
    {
      label: "YOUR STYLE, YOUR CHOICE",
      title: "Find Something",
      highlight: "Special",
      description:
        "Browse our collection and discover products that suit your style.",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1400&q=80",
      button: "Shop Now",
    },
  ];

  return (
    <div className="HOME">
      {/* Hero Carousel */}
      <section className="container-fluid px-0">
        <div
          id="homeCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="4000"
        >
          {/* Slide indicators */}
          <div className="carousel-indicators">
            {slides.map((slide, index) => (
              <button
                key={slide.label}
                type="button"
                data-bs-target="#homeCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slides */}
          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div
                key={slide.label}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div
                  className="home-hero text-white d-flex align-items-center"
                  style={{
                    minHeight: "480px",
                    backgroundImage: `
                      linear-gradient(
                        90deg,
                        rgba(17, 24, 39, 0.95) 0%,
                        rgba(17, 24, 39, 0.75) 50%,
                        rgba(17, 24, 39, 0.25) 100%
                      ),
                      url("${slide.image}")
                    `,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="container py-5">
                    <div className="row">
                      <div className="col-lg-7">
                        <span className="badge bg-warning text-dark px-3 py-2 mb-3">
                          {slide.label}
                        </span>

                        <h1 className="display-4 fw-bold">
                          {slide.title}{" "}
                          <span className="text-warning">
                            {slide.highlight}
                          </span>
                        </h1>

                        <p className="lead my-4">
                          {slide.description}
                        </p>

                        <button
                          className="btn btn-warning btn-lg fw-bold"
                          onClick={() => navigate("/products")}
                        >
                          {slide.button}
                          <i className="bi bi-arrow-right ms-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Previous arrow */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide="prev"
            aria-label="Previous slide"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            />
          </button>

          {/* Next arrow */}
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide="next"
            aria-label="Next slide"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            />
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="container py-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold">
            Why Choose <span className="text-warning">Mich.co?</span>
          </h2>

          <p className="text-muted">
            A simple and convenient shopping experience.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm text-center p-4">
              <i className="bi bi-bag-check display-5 text-warning mb-3" />
              <h5 className="fw-bold">Explore Products</h5>
              <p className="text-muted mb-0">
                Browse a variety of products in one place.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm text-center p-4">
              <i className="bi bi-search display-5 text-warning mb-3" />
              <h5 className="fw-bold">Easy Discovery</h5>
              <p className="text-muted mb-0">
                Find products using search and category filters.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm text-center p-4">
              <i className="bi bi-cart-check display-5 text-warning mb-3" />
              <h5 className="fw-bold">Simple Shopping</h5>
              <p className="text-muted mb-0">
                Add your favourite products to your cart.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
