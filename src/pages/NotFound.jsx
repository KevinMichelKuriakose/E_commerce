
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex justify-content-center align-items-center text-center text-white px-3"
      style={{
        minHeight: "75vh",
        backgroundColor: "#111827",
      }}
    >
      <div>
        <h1
          className="display-1 fw-bold neon-text"
          style={{
            color: "#ffc107",
            textShadow: "0 0 10px #ffc107, 0 0 25px #ffc107",
          }}
        >
          404
        </h1>

        <h2 className="fw-bold mt-3">
          Oops! Page Not Found
        </h2>

        <p className="text-secondary mt-3 mb-4">
          The page you're looking for doesn't exist or may have moved.
        </p>

        <button
          className="btn btn-warning btn-lg fw-bold bounce-button"
          onClick={() => navigate("/home")}
        >
          <i className="bi bi-house-door-fill me-2"></i>
          Back to Home
        </button>

        <div className="mt-3">
          <Link
            to="/products"
            className="text-warning text-decoration-none"
          >
            Or explore our products
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
