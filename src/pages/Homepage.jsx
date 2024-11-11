import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react"; // Import QR Code

const Homepage = () => {
  const [blurred, setBlurred] = useState(true);
  const navigate = useNavigate();
  const walletAddress = "yourwallet.crypto"; // Replace with your wallet address

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
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/ryry/image/upload/v1723998454/ryan-sitting-with-laptop-overlay_ouyp5x.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 3,
          pointerEvents: "none"
        }}
      />

      {/* Main Content */}
      <div
        className={`relative flex flex-col min-h-screen`}
        style={{
          zIndex: 2
        }}
      >
        <Navbar />

        {/* Main Section */}
        <div className="flex-grow flex flex-col items-left h-full p-8 pt-32 sm:p-12 sm:justify-center sm:pb-24 md:justify-center md:p-24 max-w-full container mx-auto">
          <h1 className="drop-shadow-md text-white font-bold text-6xl sm:text-7xl md:text-9xl mb-4 -ml-1 sm:-ml-2 text-center md:text-left lg:text-left">
            Ryan Fleming
          </h1>

          <div className="text-white text-lg sm:text-xl text-center max-w-md md:text-left lg:text-left ml-0">
            <p>
              I specialize in web development, marketing tools, AI, game
              development, 3D modeling, and all things web.
            </p>

            <button
              onClick={() => navigate("/projects")}
              style={{
                padding: "10px 20px",
                backgroundColor: "#ffffff",
                color: "#7e7c7b",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "18px",
                filter:
                  "drop-shadow(0 4px 3px rgba(0, 0, 0, 0.07)) drop-shadow(0 2px 2px rgba(0, 0, 0, 0.06))",
                margin: "24px 0 0 0"
              }}
            >
              View Projects
            </button>
            {/* Bitcoin Wallet Section */}
            <div className="flex w-full items-center justify-start space-x-4 mb-6 py-12 rounded-lg ">
              {/* QR Code */}
              <div className="bg-white p-1 rounded-md">
                <QRCodeCanvas
                  value={`bitcoin:${walletAddress}`}
                  size={60} // Compact size
                  bgColor={"#ffffff"}
                  fgColor={"#000000"}
                  includeMargin={false} // No extra margin for compactness
                />
              </div>
              {/* Bitcoin Address */}
              <p className="text-white font-mono text-sm px-2 py-1 rounded-md break-words">
                I collect Bitcoin
              </p>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-4 mb-4 p-6 sm:p-8 md:p-12">
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

      {/* Blur Layer */}
      {blurred && (
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center bg-black bg-opacity-20 backdrop-blur-lg transition-opacity">
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
