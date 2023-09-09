import React from "react";
import "../css/Certificates.css";
import CertificateImage1 from "../assets/certificates/coursera_datascienc.jpg";
import CertificateImage2 from "../assets/certificates/coursera_machinelearning.jpg";
import CertificateImage3 from "../assets/certificates/js_dsa.png";
import CertificateImage4 from "../assets/certificates/participation_certificate.jpg";
import CertificateImage5 from "../assets/certificates/resp_web_design.png";
import { useDarkTheme } from "../context/ThemeState";

function Certificates() {
  const { darkMode } = useDarkTheme();

  const certificateImages = [
    CertificateImage1,
    CertificateImage2,
    CertificateImage3,
    CertificateImage4,
    CertificateImage5,
  ];

  return (
    <section
      className={`certificates ${darkMode ? "bg-dark text-light" : ""} mt-5`}
      style={{ overflowY: "auto", height: "100vh" }}
    >
      <div className="container">
        <h2 className="heading text-center">Certificates</h2>
        <div
          id="certificateCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {certificateImages.map((image, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  src={image}
                  className="d-block certificate-image img-fluid"
                  alt={`Certificate ${index + 1}`}
                  style={{ maxHeight: "80vh", margin: "0 auto" }}
                />
              </div>
            ))}
          </div>
          <button
            className={`carousel-control-prev certificates ${darkMode ? "dark-mode bg-dark text-light" : ""}`}
            type="button"
            data-bs-target="#certificateCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className={`carousel-control-next certificates ${darkMode ? "dark-mode bg-dark text-light" : ""}`}
            type="button"
            data-bs-target="#certificateCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Certificates;
