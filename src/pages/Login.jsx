
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      setError("Please enter both username and password.");
      return;
    }

    setError("");

    // Demo login only — no backend authentication yet.
    navigate("/home");
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center py-5 px-3"
      style={{
        minHeight: "80vh",
        backgroundColor: "#111827",
      }}
    >
      <div
        className="card border-0 shadow-lg p-4 p-md-5"
        style={{
          width: "100%",
          maxWidth: "430px",
          borderRadius: "15px",
        }}
      >
        <div className="text-center mb-4">
          <Link
            to="/home"
            className="text-decoration-none fw-bold display-6 text-dark"
          >
            Mich<span className="text-warning">.co</span>
          </Link>

          <p
            className="text-muted small mt-1"
            style={{ letterSpacing: "3px" }}
          >
            PREMIUM TECHNOLOGY
          </p>

          <h3 className="fw-bold mt-4">Welcome Back!</h3>

          <p className="text-muted">
            Login to continue shopping.
          </p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label fw-semibold">
              Username
            </label>

            <input
              id="username"
              type="text"
              className="form-control py-2"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">
              Password
            </label>

            <input
              id="password"
              type="password"
              className="form-control py-2"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>

          {error && (
            <div className="alert alert-danger py-2" role="alert">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="btn btn-warning w-100 fw-bold py-2 mt-2"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-muted mb-0">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-dark fw-bold text-decoration-none"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
