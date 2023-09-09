import React, { useState, useEffect } from "react";
import { ReactComponent as PhotoshopIcon } from "../assets/svg/photoshop.svg";
import { ReactComponent as BootstrapIcon } from "../assets/svg/bootstrap.svg";
import { ReactComponent as CSSIcon } from "../assets/svg/css.svg";
import { ReactComponent as ExpressIcon } from "../assets/svg/express.svg";
import { ReactComponent as GitIcon } from "../assets/svg/git.svg";
import { ReactComponent as HTMLIcon } from "../assets/svg/html.svg";
import { ReactComponent as JavaScriptIcon } from "../assets/svg/javascript.svg";
import { ReactComponent as MongoDBIcon } from "../assets/svg/mongodb.svg";
import { ReactComponent as MySQLIcon } from "../assets/svg/mysql.svg";
import { ReactComponent as NodeJSIcon } from "../assets/svg/nodejs.svg";
import { ReactComponent as PremiereIcon } from "../assets/svg/premiere.svg";
import { ReactComponent as ReactIcon } from "../assets/svg/react.svg";
import { ReactComponent as ReduxIcon } from "../assets/svg/redux.svg";
import { ReactComponent as MaterialUIIcon } from "../assets/svg/material-ui.svg";
import "../css/Skills.css";
import { useDarkTheme } from "../context/ThemeState";

function Skills() {
  const { darkMode } = useDarkTheme();

  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  const skillsList = [
    {
      category: "Programming Languages",
      skills: [
        { skill: "JavaScript", icon: <JavaScriptIcon className="svg-icon" /> },
        { skill: "HTML", icon: <HTMLIcon className="svg-icon" /> },
        { skill: "CSS", icon: <CSSIcon className="svg-icon" /> },
      ],
    },
    {
      category: "Frontend Frameworks",
      skills: [
        { skill: "React", icon: <ReactIcon className="svg-icon" /> },
        { skill: "Material UI", icon: <MaterialUIIcon className="svg-icon" /> },
      ],
    },
    {
      category: "Backend Technologies",
      skills: [
        { skill: "Node.js", icon: <NodeJSIcon className="svg-icon" /> },
        { skill: "Express.js", icon: <ExpressIcon className="svg-icon" /> },
        { skill: "MongoDB", icon: <MongoDBIcon className="svg-icon" /> },
        { skill: "MySQL", icon: <MySQLIcon className="svg-icon" /> },
      ],
    },
    {
      category: "Version Control",
      skills: [{ skill: "Git", icon: <GitIcon className="svg-icon" /> }],
    },
    {
      category: "Graphic Design",
      skills: [
        {
          skill: "Adobe Photoshop",
          icon: <PhotoshopIcon className="svg-icon" />,
        },
        {
          skill: "Adobe Premiere Pro",
          icon: <PremiereIcon className="svg-icon" />,
        },
      ],
    },
    {
      category: "Styling Frameworks",
      skills: [
        { skill: "Bootstrap", icon: <BootstrapIcon className="svg-icon" /> },
      ],
    },
    {
      category: "State Management",
      skills: [{ skill: "Redux", icon: <ReduxIcon className="svg-icon" /> }],
    },
  ];

  return (
    <section
      className={`skills d-flex align-items-center ${
        darkMode ? "bg-dark" : ""
      } mt-5`}
    >
      <div className={`container ${darkMode ? "text-light" : ""}`}>
        <h2 className="text-center">My Skills</h2>
        {skillsList.map((category, index) => (
          <div key={index}>
            <h3>{category.category}</h3>
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="skills-list">
                  {category.skills.map((item, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`skill-item ${animated ? "animated" : ""}`}
                    >
                      <span className="skill-icon">{item.icon}</span>
                      <span className="skill-text">{item.skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
