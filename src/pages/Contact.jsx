import React from "react";
import Navbar from "../components/Navbar";

const CVDownloadPage = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/ryry/image/upload/v1724678621/ry_boi_White_marble_statue_of_a_man_doing_jiu_jitsu_in_a_minima_acc07f02-a4a4-4747-a8bb-d1be38683a04_ex6lju.webp')`,
        backgroundColor: "#D1D0CE",
        backgroundPosition: "center"
      }}
    >
      {/* Overlay Image */}
      <div
        className="absolute inset-0"
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
        <div className="flex-grow flex flex-col items-start justify-center p-8 pt-32 sm:p-12 md:p-24 max-w-full container mx-auto text-center">
          <h1 className="text-white font-bold text-5xl sm:text-6xl md:text-8xl mb-8">
            Curriculum Vitae
          </h1>

          <div className="mt-8">
            <a
              href="https://res.cloudinary.com/ryry/image/upload/v1724678192/RyanFlemingCV_ud47du.pdf"
              download
              className="bg-gray-700 text-white font-bold py-4 px-6 rounded-lg hover:bg-white"
            >
              Here's my cv
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mt-12">
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
              href="#"
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
