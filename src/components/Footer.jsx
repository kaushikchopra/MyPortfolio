import React from "react";
import "../css/Footer.css";
import { useDarkTheme } from "../context/ThemeState";

function Footer() {
  const { darkMode } = useDarkTheme();

  return (
    <footer className={`footer ${darkMode ? "dark-mode" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <p>
              &copy; {new Date().getFullYear()}&#x2C; S Kaushik Chopra. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
