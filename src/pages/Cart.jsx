
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { removeFromCart } from "../features/cart/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector( (state) => state.cart.cartItems );

  function handleRemove(index) {
    dispatch(removeFromCart(index));
  }

  return (
    <div className="container py-5">
      <div className="mb-4">
        <h2 className="fw-bold">
          My <span className="text-warning">Cart</span>
        </h2>

        <p className="text-muted">
          Review the products you've added to your cart.
        </p>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-5">
          <i className="bi bi-cart-x display-1 text-secondary"></i>

          <h3 className="mt-3">Your cart is empty</h3>

          <p className="text-muted">
            Looks like you haven't added anything yet.
          </p>

          <button
            className="btn btn-warning fw-bold mt-2"
            onClick={() => navigate("/products")}
          >
            <i className="bi bi-bag me-2"></i>
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="row g-4">
          {/* Cart products */}
          <div className="col-12">
            {cartItems.map((product, index) => (
              <div
                className="card border-0 shadow-sm mb-3"
                key={`${product.id}-${index}`}
              >
                <div className="card-body">
                  <div className="row align-items-center g-3">
                    <div className="col-4 col-md-2 text-center">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="img-fluid"
                        style={{
                          height: "120px",
                          maxWidth: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </div>

                    <div className="col-8 col-md-7">
                      <h6 className="fw-bold">
                        {product.title}
                      </h6>

                      <p className="text-muted small mb-2">
                        {product.category}
                      </p>

                      <h5 className="fw-bold">
                        ${Number(product.price).toFixed(2)}
                      </h5>
                    </div>

                    <div className="col-12 col-md-3 text-md-end">
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => handleRemove(index)}
                      >
                        <i className="bi bi-trash me-2"></i>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Continue shopping */}
          <div className="col-12">
            <button
              className="btn btn-warning fw-bold"
              onClick={() => navigate("/products")}
            >
              <i className="bi bi-arrow-left me-2"></i>
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
