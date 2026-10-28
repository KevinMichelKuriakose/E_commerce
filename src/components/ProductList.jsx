import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { fetchNewProducts } from "../features/product/productSlice";
import { addToCart } from "../features/cart/cartSlice";

function ProductList({ searchText = "" }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Get products from Redux store
  const { newProducts, inProgress, error } = useSelector(
    (state) => state.product
  );

  // Fetch products from API
  useEffect(() => {
    if (newProducts.length === 0 && !inProgress) {
      dispatch(fetchNewProducts());
    }
  }, [dispatch, newProducts.length, inProgress]);

  // Get all unique categories
  const categories = [
    "all",
    ...new Set(newProducts.map((product) => product.category)),
  ];

  // Search products
  const search = searchText.trim().toLowerCase();

  // Filter products by search and category
  const filteredProducts = newProducts.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(search);

    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Add product to cart
  function handleAddToCart(product) {
    dispatch(addToCart(product));
  }

  return (
    <div className="container py-5">

      {/* Page Heading */}
      <div className="text-center mb-4">
        <h2 className="fw-bold">
          Our <span className="text-warning">Products</span>
        </h2>

        <p className="text-muted">
          Discover products you'll love at Mich.co.
        </p>
      </div>


      {/* Category Buttons */}
      <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
        {categories.map((category) => (
          <button key={category}
            className={
              selectedCategory === category
                ? "btn btn-warning"
                : "btn btn-outline-dark"
            }
            onClick={() => setSelectedCategory(category)}
          >
            {category === "all"
              ? "SHOW ALL"
              : category.toUpperCase()}
          </button>
        ))}
      </div>


      {/* Loading Message */}
      {inProgress && newProducts.length === 0 && (
        <div className="text-center py-5">
          <div className="spinner-border text-warning" role="status"></div>
          <p className="mt-3">Loading products...</p>
        </div>
      )}


      {/* Error Message */}
      {error && newProducts.length === 0 && (
        <div className="alert alert-danger text-center">
          <p>{error}</p>

          <button
            className="btn btn-warning"
            onClick={() => dispatch(fetchNewProducts())}
          >
            Try Again
          </button>
        </div>
      )}


      {/* Display Products */}
      {!inProgress && !error && newProducts.length > 0 && (

        <div className="row g-4">

          {filteredProducts.length > 0 ? (

            filteredProducts.map((product) => (

              <div
                className="col-12 col-sm-6 col-lg-4 col-xl-3"
                key={product.id}
              >

                <div className="card h-100 border-0 shadow-sm">

                  {/* Product Image */}
                  <div className="p-3">
                    <Link to={`/products/${product.id}`}>
                      <img
                        src={product.image}
                        alt={product.title}
                        className="card-img-top"
                        style={{
                          height: "230px",
                          objectFit: "contain",
                        }}
                      />
                    </Link>
                  </div>


                  {/* Product Details */}
                  <div className="card-body d-flex flex-column">

                    <span className="badge bg-warning text-dark align-self-start mb-2">
                      {product.category}
                    </span>

                    <Link
                      to={`/products/${product.id}`}
                      className="text-decoration-none text-dark"
                    >
                      <h6 className="fw-bold">{product.title}</h6>
                    </Link>


                    {/* Product Rating */}
                    {product.rating && (
                      <p className="text-muted small mb-2">
                        <i className="bi bi-star-fill text-warning me-1"></i>
                        {product.rating.rate} ({product.rating.count} reviews)
                      </p>
                    )}


                    {/* Product Price */}
                    <h5 className="fw-bold mt-auto mb-3">
                      ${Number(product.price).toFixed(2)}
                    </h5>


                    {/* Product Buttons */}
                    <div className="d-flex gap-2">

                      <Link
                        to={`/products/${product.id}`}
                        className="btn btn-outline-dark flex-grow-1"
                      >
                        View Details
                      </Link>

                      <button
                        className="btn btn-warning"
                        onClick={() => handleAddToCart(product)}
                        title="Add to Cart"
                        aria-label={`Add ${product.title} to cart`}
                      >
                        <i className="bi bi-cart-plus"></i>
                      </button>

                    </div>

                  </div>
                </div>
              </div>

            ))

          ) : (

            // No Products Found
            <div className="text-center py-5">
              <i className="bi bi-search fs-1 text-muted"></i>

              <h4 className="mt-3">No products found</h4>

              <p className="text-muted">
                Try another search or select a different category.
              </p>

              <button
                className="btn btn-warning"
                onClick={() => {
                  setSelectedCategory("all");
                  navigate("/products");
                }}
              >
                Show All Products
              </button>
            </div>

          )}

        </div>
      )}

    </div>
  );
}

export default ProductList;