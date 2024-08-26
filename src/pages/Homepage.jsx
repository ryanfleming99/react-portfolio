import React, { useState } from "react";
import Navbar from "../components/Navbar";
// import Welcome from "../components/WelcomeHeading"; // Adjust the path if necessary

const Homepage = () => {
  const [blurred, setBlurred] = useState(true);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/ryry/image/upload/v1723998454/ryan-sitting-with-laptop_fgwoxb.webp')`,
        backgroundColor: "#D1D0CE",
        backgroundPosition: "center"
      }}
    >
      {/* Overlay Image */}
      <div
        className="absolute inset-0 "
        style={{
          backgroundImage: `url('https://res.cloudinary.com/ryry/image/upload/v1723998454/ryan-sitting-with-laptop-overlay_ouyp5x.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1,
          pointerEvents: "none"
        }}
      />

      {/* Main Content (Navbar + other content) */}
      <div className="relative z-0 flex flex-col min-h-screen">
        <Navbar /> {/* Navbar should be under the blur */}
        {/* Main Section - Centered Under Navbar */}
        {!blurred && (
          <div className="flex-grow flex flex-col items-left h-full p-8 pt-32  sm:p-12 sm:justify-center sm:pb-24  md:justify-center   md:p-24 max-w-full container mx-auto">
            <h1 className=" text-white font-bold text-6xl sm:text-7xl md:text-9xl mb-4 -ml-1 sm:-ml-2 text-center md:text-left lg:text-left">
              Ryan Fleming
            </h1>

            {/* Additional Content Section */}
            <div className="text-white text-lg sm:text-xl text-center max-w-md md:text-left lg:text-left ml-0">
              <p>
                I specialize in data, marketing tools, AI, game development, 3D
                modeling, and all things web.
              </p>
              <p className="text-xs mt-4 hidden md:block lg:block">
                Hire me, you can find my CV on the{" "}
                <a className="hover:text-blue-300" href="/contact">
                  contact
                </a>{" "}
                page.
              </p>
            </div>
          </div>
        )}
        {/* Social Icons */}
        {!blurred && (
          <div className="flex justify-center space-x-6 mt-4 mb-4 p-6 sm:p-8 md:p-12">
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
        )}
      </div>

      {/* Blur Layer */}
      {blurred && (
        <div
          className={`absolute inset-0 z-10 flex flex-col justify-center items-center bg-black bg-opacity-20 backdrop-blur-lg`}
        >
          <button
            onClick={() => setBlurred(false)}
            className="text-white font-bold text-7xl z-20"
          >
            Enter
          </button>
        </div>
      )}
    </div>
  );
};

export default Homepage;
