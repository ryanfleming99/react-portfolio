import React from "react";
import Navbar from "../components/Navbar";

const CVDownloadPage = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/ryry/image/upload/v1725702520/cv-background-scroll_gf9z8v.webp')`,
        backgroundColor: "#D1D0CE",
        backgroundPosition: "center"
      }}
    >
      {/* Overlay Image */}
      <div
        className="absolute inset-0 fade-out"
        style={{
          backgroundImage: `url('')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1,
          pointerEvents: "none"
        }}
      />

      {/* Main Content */}
      <div className="relative z-0 flex flex-col min-h-screen">
        <Navbar/> {/* Navbar */}
        {/* Content Section */}
        <div className="flex-grow flex flex-col items-center justify-end p-8 pt-48 sm:p-12 md:p-24 max-w-full container mx-auto text-center h-full">
          <div className="">
            <a
              href="https://res.cloudinary.com/ryry/image/upload/v1740407064/cloudinary-cv_zntato.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="drop-shadow text-white font-bold sm:text-3xl md:text-3xl mb-48">
                Click to open CV in a new window
              </button>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mt-24 mb-16 ">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/rynfleming/"
              className="text-white text-3xl hover:text-gray-400"
            >
              <i className="fab fa-linkedin drop-shadow"></i>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ryanfleming99"
              className="text-white text-3xl hover:text-gray-400"
            >
              <i className="fab fa-github-square drop-shadow"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVDownloadPage;
