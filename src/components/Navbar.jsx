import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react"; // Import QR Code

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const walletAddress = "yourwallet.crypto"; // Replace with your wallet address

  const textColor =
    location.pathname === "/" ? "text-white" : "text-semiTransparentGray";

  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent p-6 sm:p-8 md:p-12 z-10">
      <div className="container flex justify-between items-center align-center px-0 min-w-full sm:px-12">
        <div className="text-black text-lg"></div>
        {/* Bitcoin Wallet Section */}
        <div className="flex w-full items-center justify-start space-x-2 sm:space-x-4 py-2 sm:py-12 rounded-lg ">
          {/* QR Code */}
          <div className="bg-white p-1 rounded-md">
            <Link to="/">
              <QRCodeCanvas
                value={`bitcoin:${walletAddress}`}
                size={40} // Compact size
                bgColor={"#ffffff"}
                fgColor={"#000000"}
                includeMargin={false} // No extra margin for compactness
              />
            </Link>
          </div>

          {/* Bitcoin Address */}
          <Link
            to="/"
            className={`block ${textColor} hover:text-gray-400 drop-shadow-md text-gray-400`}
          >
            Send Bitcoin
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
            aria-expanded={isOpen}
            aria-controls="navbar-menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
          } lg:flex lg:items-center lg:space-x-10 absolute lg:static top-20 sm:top-12 left-0 w-full lg:w-auto bg-transparent lg:bg-none p-6 lg:p-0 z-20 flex-row justify-between`}
        >
          <Link
            to="/professional-career"
            className={`block ${textColor} hover:text-gray-400 drop-shadow-md text-gray-400`}
          >
            Career
          </Link>
          <Link
            to="/projects"
            className={`block ${textColor} hover:text-gray-400 drop-shadow-md text-gray-400`}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={`block ${textColor} hover:text-gray-400 drop-shadow-md text-gray-400`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
