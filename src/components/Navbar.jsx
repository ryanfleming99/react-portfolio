import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent p-24 z-10">
      <div className="container mx-auto flex justify-between min-w-full items-center">
        <div className="text-white text-lg">
          <p>Hello I'm</p>
        </div>
        <div className="block lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:space-x-14`} // Adjust spacing between links
        >
          <Link
            to="/what-i-do"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400"
          >
            What I do
          </Link>
          <Link
            to="/projects"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400"
          >
            Projects
          </Link>
          <Link
            to="/artwork"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400"
          >
            Artwork
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
