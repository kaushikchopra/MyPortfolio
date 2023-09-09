import React, { useEffect, useState } from "react";
import kaushikImage from "../assets/kaushik_image/1.png";
import "../css/Hero.css";
import { Link } from "react-router-dom";
import { useDarkTheme } from "../context/ThemeState";

function Hero() {
  const { darkMode } = useDarkTheme();
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <section
      className={`hero ${animated ? "animated" : ""} ${
        darkMode ? "dark-mode bg-dark text-light" : ""
      }`}
    >
      <div className="container">
        <div className="row align-items-center hero-col">
          <div className="col-md-6">
            <div className="text-left">
              <h1 className="display-4">Hello, I'm Kaushik Chopra</h1>
              <p className="lead">
                Full Stack Developer with expertise in JavaScript, React,
                Node.js, and more.
              </p>
              <button className={`btn ${darkMode ? "btn-light" : "btn-dark"}`}>
                <Link to="/contact" className={`contact-link ${darkMode ? "text-dark" : "text-light"}`}>Contact Me</Link>
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src={kaushikImage}
              alt="Kaushik Chopra"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
