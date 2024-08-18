import React, { useState } from "react";
import Navbar from "../components/Navbar"; // Adjust the path if necessary

const Homepage = () => {
  const [blurred, setBlurred] = useState(true);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/ryry/image/upload/v1723986099/ryan_goccqw.webp')`,
        backgroundColor: "#D1D0CE",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay"
      }}
    >
      {/* Main Content (Navbar + other content) */}
      <div className="relative z-0 flex flex-col min-h-screen">
        <Navbar /> {/* Navbar should be under the blur */}
        {/* Main Section - Centered Under Navbar */}
        {!blurred && (
          <div className="flex-grow flex flex-col items-end justify-center p-14">
            <h1 className="text-white font-bold text-5xl mb-8">
              Welcome to My Portfolio
            </h1>

            {/* Additional Content Section */}
            <div className="text-white text-lg max-w-3xl text-right">
              <p>
                Here is some additional content you can add to your homepage.
                You can put in more details about your portfolio, your projects,
                or anything else you'd like to showcase.
              </p>
            </div>
          </div>
        )}
        {/* Social Icons */}
        {!blurred && (
          <div className="flex justify-center space-x-6 mt-8 mb-8">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/rynfle2132ming/"
              className="text-white text-3xl hover:text-gray-400"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.behance.net/RYANFLE21MINac44"
              className="text-white text-3xl hover:text-gray-400"
            >
              <i className="fab fa-behance-square"></i>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ryanf213leming99"
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
            className="text-white font-bold text-3xl z-20"
          >
            Enter
          </button>
        </div>
      )}
    </div>
  );
};

export default Homepage;
