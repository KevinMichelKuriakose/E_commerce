
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchNewProducts } from "../features/product/productSlice";
import { addToCart } from "../features/cart/cartSlice";

function ProductDetails() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { newProducts, inProgress, error } = useSelector((state) => state.product);

  const product = newProducts.find(
    (item) => item.id === Number(productId)
  );

  useEffect(() => {
    if (newProducts.length === 0) {
      dispatch(fetchNewProducts());
    }
  }, [dispatch, newProducts.length]);

  if (inProgress && newProducts.length === 0) {
    return (
      <div className="container text-center py-5">
        <div className="spinner-border text-warning" role="status" />
        <p className="mt-3">Loading product details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container text-center py-5">
        <h3>Something went wrong!</h3>
        <p>{error}</p>
        <button
          className="btn btn-warning"
          onClick={() => dispatch(fetchNewProducts())}
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container text-center py-5">
        <h3>Product not found</h3>
        <button
          className="btn btn-warning mt-3"
          onClick={() => navigate("/products")}
        >
          Back to Products
        </button>
      </div>
    );
  }

  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  function handleBuyNow() {
    dispatch(addToCart(product));
    navigate("/cart");
  }

  return (
    <div className="container py-5">
      <button
        className="btn btn-outline-dark mb-4"
        onClick={() => navigate("/products")}
      >
        <i className="bi bi-arrow-left me-2"></i>
        Back to Products
      </button>

      <div className="row g-4 align-items-center">
        <div className="col-md-6">
          <div className="card border-0 shadow-sm p-4">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid mx-auto"
              style={{
                height: "350px",
                maxWidth: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        </div>

        <div className="col-md-6">
          <span className="badge bg-warning text-dark mb-3">
            {product.category}
          </span>

          <h2 className="fw-bold">{product.title}</h2>

          {product.rating && (
            <p className="text-muted">
              <i className="bi bi-star-fill text-warning me-1"></i>
              {product.rating.rate} / 5
              <span className="ms-2">
                ({product.rating.count} reviews)
              </span>
            </p>
          )}

          <h3 className="fw-bold text-dark my-3">
            ${Number(product.price).toFixed(2)}
          </h3>

          <hr />

          <h5 className="fw-bold">Product Description</h5>
          <p className="text-secondary">{product.description}</p>

          <div className="d-flex flex-wrap gap-3 mt-4">
            <button
              className="btn btn-warning fw-bold px-4"
              onClick={handleAddToCart}
            >
              <i className="bi bi-cart-plus me-2"></i>
              Add to Cart
            </button>

            <button
              className="btn btn-dark px-4"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
