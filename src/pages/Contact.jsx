
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    alert("Thank you for contacting Mich.co!");

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="CONTACT">
      {/* Hero Section */}
      <section
        className="text-white text-center py-5"
        style={{ backgroundColor: "#111827" }}
      >
        <div className="container py-4">
          <span className="badge bg-warning text-dark mb-3 px-3 py-2">
            WE'RE HERE TO HELP
          </span>

          <h1 className="display-4 fw-bold">
            Contact <span className="text-warning">Us</span>
          </h1>

          <p className="lead text-light mt-3 mb-0">
            Have a question? We'd love to hear from you.
          </p>
        </div>
      </section>

      <div className="container py-5">
        {/* Contact Information Cards */}
        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm text-center p-4">
              <i className="bi bi-envelope-fill display-5 text-warning mb-3"></i>

              <h5 className="fw-bold">Email Us</h5>

              <p className="text-secondary mb-0">
                Send us your questions through the contact form.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm text-center p-4">
              <i className="bi bi-headset display-5 text-warning mb-3"></i>

              <h5 className="fw-bold">Customer Support</h5>

              <p className="text-secondary mb-0">
                We're here to help with your shopping questions.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm text-center p-4">
              <i className="bi bi-chat-dots-fill display-5 text-warning mb-3"></i>

              <h5 className="fw-bold">Send a Message</h5>

              <p className="text-secondary mb-0">
                Share your feedback or tell us how we can improve.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm p-4 p-md-5">
              <div className="text-center mb-4">
                <h2 className="fw-bold">
                  Send Us a <span className="text-warning">Message</span>
                </h2>

                <p className="text-muted">
                  Fill out the form below.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="contactName" className="form-label fw-semibold">
                    Your Name
                  </label>

                  <input
                    id="contactName"
                    type="text"
                    className="form-control py-2"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="contactEmail" className="form-label fw-semibold">
                    Your Email
                  </label>

                  <input
                    id="contactEmail"
                    type="email"
                    className="form-control py-2"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="contactMessage" className="form-label fw-semibold">
                    Your Message
                  </label>

                  <textarea
                    id="contactMessage"
                    className="form-control"
                    rows="5"
                    placeholder="How can we help you?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-warning fw-bold w-100 py-2"
                >
                  <i className="bi bi-send-fill me-2"></i>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
