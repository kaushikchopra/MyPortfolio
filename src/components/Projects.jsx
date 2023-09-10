import React from "react";
import { Link } from "react-router-dom";
import TributeImg from "../assets/images/tribute.png";
import FoodSurvey from "../assets/images/food-survey.png";
import JSDoc from "../assets/images/js-documentation.png";
import PaginationJavascript from "../assets/images/paginationJavascript.png";
import WeatherAPI from "../assets/images/WeatherAPI.png";
import RandomUserAPI from "../assets/images/randomUserAPI.png";
import CartInContextAPI from "../assets/images/cartInContextAPI.png";
import TodoInReact from "../assets/images/TodoInReact.png";
import GuviUsingRouters from "../assets/images/guviUsingRouters.png";
import "../css/Projects.css";
import { useDarkTheme } from "../context/ThemeState";

// Define an array of project objects
const projectsData = [
  {
    title: "Tribute Page",
    image: TributeImg,
    alt: "Image for Tribute Page",
    link: "https://kaushikchopra.github.io/freecodecamp-tribute-page/",
    category: "HTML & CSS Projects",
  },
  {
    title: "Food Survey",
    image: FoodSurvey,
    alt: "Image for Food Survey",
    link: "https://kaushikchopra.github.io/freecodecamp-survey-form/",
    category: "HTML & CSS Projects",
  },
  {
    title: "JavaScript Documentation",
    image: JSDoc,
    alt: "Image for JavaScript Documentation",
    link: "https://kaushikchopra.github.io/freecodecamp-technical-documentation-page/",
    category: "HTML & CSS Projects",
  },
  {
    title: "Pagination - Javascript",
    image: PaginationJavascript,
    alt: "Image for Pagination - Javascript",
    link: "https://jspagination.netlify.app/",
    category: "HTML, CSS & Javascript Projects",
  },
  {
    title: "Country Weather Reporter",
    image: WeatherAPI,
    alt: "Image for Country Weather Reporter",
    link: "https://countryweatherreporter.netlify.app/",
    category: "HTML, CSS & Javascript Projects",
  },
  {
    title: "Random User Data - API",
    image: RandomUserAPI,
    alt: "Image for Random User Data - API",
    link: "https://randomusersdata.netlify.app/",
    category: "HTML, CSS & Javascript Projects",
  },
  {
    title: "Cart Page created using Context API",
    image: CartInContextAPI,
    alt: "Image for Cart Page created using Context API",
    link: "https://shoppingandcart.netlify.app/",
    category: "React Projects",
  },
  {
    title: "Todo list with CRUD in React",
    image: TodoInReact,
    alt: "Image for Todo list with CRUD in React",
    link: "https://mytodolistitems.netlify.app/",
    category: "React Projects",
  },
  {
    title: "Guvi using React Routers",
    image: GuviUsingRouters,
    alt: "Image for Guvi using React Routers",
    link: "https://guvirecreation.netlify.app/",
    category: "React Projects",
  },
];

// Helper function to group projects by category
function groupProjectsByCategory(projects) {
  const groupedProjects = {};
  projects.forEach((project) => {
    if (!groupedProjects[project.category]) {
      groupedProjects[project.category] = [];
    }
    groupedProjects[project.category].push(project);
  });
  return groupedProjects;
}

function Projects() {
  const { darkMode } = useDarkTheme();

  const groupedProjects = groupProjectsByCategory(projectsData);

  return (
    <section
      id="projects"
      className={`project-section ${
        darkMode ? "dark-mode bg-dark text-light" : ""
      } mt-5`}
    >
      {Object.keys(groupedProjects).map((category, index) => (
        <div key={index}>
          <h3 className="projects-section-header text-center py-2">
            {category}
          </h3>
          <div className="container">
            <div className="row">
              {groupedProjects[category].map((project, index) => (
                <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
                  <div
                    className={`card mb-4 project ${
                      darkMode ? "dark-mode bg-dark text-light" : ""
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="card-img-top"
                    />
                    <div
                      className={`card-body ${
                        darkMode ? "bg-dark text-light" : ""
                      }`}
                    >
                      <h5 className="card-title">{project.title}</h5>
                      <button
                        className={`btn btn-sm btn-primary ${
                          darkMode ? "btn-light" : "btn-dark"
                        }`}
                      >
                        <Link
                          to={project.link}
                          className={`project-link ${
                            darkMode ? "text-dark" : "text-light"
                          }`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
