import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const textColor =
    location.pathname === "/what-i-do" || location.pathname === "/projects"
      ? "text-gray"
      : "text-white";

  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent p-6 sm:p-8 md:p-12 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg"></div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
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
            isOpen ? "flex" : "hidden"
          } lg:flex lg:items-center lg:space-x-10 absolute lg:static top-12 left-0 w-full lg:w-auto bg-transparent lg:bg-none p-6 lg:p-0 z-20 flex-row justify-between`}
        >
          <Link
            to="/professional-career"
            className={`block ${textColor} hover:text-gray-400 drop-shadow-md`}
          >
            Career
          </Link>
          <Link
            to="/projects"
            className={`block ${textColor} hover:text-gray-400 drop-shadow-md`}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={`block ${textColor} hover:text-gray-400 drop-shadow-md`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
