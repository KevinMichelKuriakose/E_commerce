
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Header({ onSearch }) {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cartItems);

  // Filter products immediately while typing
  function handleInputChange(e) {
    const value = e.target.value;
    setSearchInput(value);
    onSearch(value);

    // Open the products page automatically
    navigate("/products");
  }

  return (
    <nav className="navbar navbar-dark bg-dark sticky-top shadow">
      <div className="container-fluid px-4 d-flex flex-wrap justify-content-between gap-3">

        {/* Mich.co logo */}
        <NavLink className="navbar-brand fw-bold fs-3" to="/home">
          Mich<span className="text-warning">.co</span>
          <div
            className="text-secondary"
            style={{ fontSize: "9px", letterSpacing: "3px" }}
          >
            PREMIUM TECHNOLOGY
          </div>
        </NavLink>

        {/* Live search */}
        <form
          className="d-flex flex-grow-1"
          style={{ maxWidth: "450px" }}
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="search"
            className="form-control rounded-start"
            placeholder="Search products..."
            value={searchInput}
            onChange={handleInputChange}
          />

          {/* Dummy button */}
          <button
            type="button"
            className="btn btn-warning rounded-start-0"
          >
            Search
          </button>
        </form>

        {/* Navigation links */}
        <div className="d-flex align-items-center flex-wrap gap-3">
          <NavLink to="/home" className="text-white text-decoration-none">
            Home
          </NavLink>

          <NavLink to="/products" className="text-white text-decoration-none">
            Products
          </NavLink>

          <NavLink to="/about" className="text-white text-decoration-none">
            About
          </NavLink>

          <NavLink to="/contact" className="text-white text-decoration-none">
            Contact
          </NavLink>

          <NavLink to="/" className="text-white text-decoration-none">
            Login
          </NavLink>

          <NavLink
            to="/cart"
            className="text-warning text-decoration-none fw-bold"
          >
            <i className="bi bi-cart3"></i> ({cartItems.length})
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Header;
