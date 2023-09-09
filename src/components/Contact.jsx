import React, { useState } from "react";
import "../css/Contact.css";
import { Link } from "react-router-dom";
import { useDarkTheme } from "../context/ThemeState";

function Contact() {
  const { darkMode } = useDarkTheme();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);

    // Clear the form fields
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <section
      className={`contact pt-5 mt-5 ${
        darkMode ? "dark-mode bg-dark text-light" : ""
      }`}
    >
      <div className="container">
        <h2 className="text-center">Contact Me</h2>
        <div className="row">
          <div className="col-md-8 ">
            <form
              onSubmit={handleSubmit}
              className={`${darkMode ? "bg-dark text-light" : ""}`}
            >
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className={`btn ${darkMode ? "btn-light" : "btn-dark"}`}
              >
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-4">
            <div
              className={`contact-details ${
                darkMode ? "bg-dark text-light" : ""
              }`}
            >
              <h4>Contact Details</h4>
              <ul>
                <li>Name: S Kaushik Chopra</li>
                <li>Email: kaushikchopra2908@gmail.com</li>
                <li>Phone: +91 (801) 511-8081</li>
                <li>
                  Address: 9/4 Ranga Sayee Street, Perambur, Chennai, Tamil Nadu
                  - 600011, India.
                </li>
              </ul>
              <h4>Social Media</h4>
              <ul className="social-media-links">
                <li>
                  <Link
                    to="https://www.linkedin.com/in/s-kaushik-chopra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={` ${darkMode ? "link-light" : "link-dark"}`}
                  >
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://twitter.com/ChopraKaushik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={` ${darkMode ? "link-light" : "link-dark"}`}
                  >
                    <i className="fab fa-twitter"></i> Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://github.com/kaushikchopra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={` ${darkMode ? "link-light" : "link-dark"}`}
                  >
                    <i className="fab fa-github"></i> GitHub
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
