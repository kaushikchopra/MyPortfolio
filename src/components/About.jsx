import React from "react";
import kaushikImage from "../assets/kaushik_image/2.png";
import "../css/About.css";
import { useDarkTheme } from "../context/ThemeState";

function About() {
  const { darkMode } = useDarkTheme();

  return (
    <section
      id="about"
      className={`about-section ${
        darkMode ? "dark-mode bg-dark text-light" : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 img-col">
            <img
              src={kaushikImage}
              alt="S Kaushik Chopra"
              className="profile-image img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h2 className="about-section-header">About Me</h2>
            <p className="about-description">
              Hello! I'm S Kaushik Chopra, a Full Stack Developer with a
              specialization in the MERN Stack. I hold a Bachelor's degree in
              Civil Engineering from Rajalakshmi Engineering College, Chennai,
              India, which I completed in 2018.
            </p>
            <p className="about-description">
              I initially started my career as a Technical Sales Representative
              at Thulasi Enterprises. However, my passion for coding and
              computing led me to transition into the world of web development.
              To make this shift, I embarked on a learning journey at Guvi
              Institute.
            </p>
            <p className="about-description">
              My skills include HTML5, CSS3, JavaScript, ReactJS, SQL, MySQL,
              MongoDB, Bootstrap, Material UI, Node.js, Express.js, GIT, Adobe
              Photoshop, and Adobe Premiere Pro.
            </p>
            <p className="about-description">
              When I'm not coding, I enjoy reading novels, listening to music,
              spending time with friends, and watching Anime. I'm passionate
              about lifelong learning and always have my nose in a book.
            </p>
            <p className="about-description">
              Despite having three years of experience as a Technical Sales Rep,
              I consider myself a fresher in the IT industry as a developer.
            </p>
            <p className="about-description">
              I'm proud to have earned two certifications from freeCodeCamp: one
              in Responsive Web Design and another in JavaScript Algorithms and
              Data Structures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
