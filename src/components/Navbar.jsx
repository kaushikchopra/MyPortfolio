import React from "react";
import { Link } from "react-router-dom";
import { useDarkTheme } from "../context/ThemeState";

function Navbar() {
  const { darkMode, toggleMode } = useDarkTheme();
  
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${
          darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
        } fixed-top`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Kaushik Chopra
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    darkMode ? "text-light" : "text-dark"
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    darkMode ? "text-light" : "text-dark"
                  }`}
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    darkMode ? "text-light" : "text-dark"
                  }`}
                  to="/skills"
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    darkMode ? "text-light" : "text-dark"
                  }`}
                  to="/projects"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    darkMode ? "text-light" : "text-dark"
                  }`}
                  to="/certificates"
                >
                  Certificates
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    darkMode ? "text-light" : "text-dark"
                  }`}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch text-light mx-2">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                checked={darkMode}
                onChange={toggleMode}
              />
              <label
                className={`form-check-label ${
                  darkMode ? "text-light" : "text-dark"
                }`}
                for="flexSwitchCheckDefault"
              >
                {darkMode ? "Dark" : "Light"} Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
