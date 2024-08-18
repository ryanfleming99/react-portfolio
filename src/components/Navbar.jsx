import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent p-12 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">Ryan Fleming</div>
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
          } lg:flex lg:items-center w-full lg:w-auto`}
        >
          <Link
            to="/what-i-do"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-14"
          >
            What I Do
          </Link>
          <Link
            to="/projects"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-14"
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
