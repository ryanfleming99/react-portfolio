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
          backgroundImage: `url('https://res.cloudinary.com/ryry/image/upload/v1724678716/ry_boi_White_marble_statue_of_a_man_doing_jiu_jitsu_in_a_minima_acc07f02-a4a4-4747-a8bb-d1be38683a04_1_ciwjsh.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1,
          pointerEvents: "none"
        }}
      />

      {/* Main Content */}
      <div className="relative z-0 flex flex-col min-h-screen">
        <Navbar /> {/* Navbar */}
        {/* Content Section */}
        <div className="flex-grow flex flex-col items-center justify-center p-8 pt-48 sm:p-12 md:p-24 max-w-full container mx-auto text-center h-full">
          <div>
            <a
              href="https://res.cloudinary.com/ryry/image/upload/v1725706555/rfcv_dwfnjm.pdf"
              window="_blank"
            >
              <button className="mt-44 text-white font-bold sm:text-3xl md:text-2xl mb-8 animate-bounce">
                CLICK ME
              </button>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mt-24">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/rynfleming/"
              className="text-white text-3xl hover:text-gray-400"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/rynfleming/"
              className="text-white text-3xl hover:text-gray-400"
            >
              <i className="fab fa-behance-square"></i>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ryanfleming99"
              className="text-white text-3xl hover:text-gray-400"
            >
              <i className="fab fa-github-square"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVDownloadPage;
