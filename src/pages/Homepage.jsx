import React, { useState } from "react";

const Homepage = () => {
  const [blurred, setBlurred] = useState(true);

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('your-background-image-url.jpg')` }}
    >
      <div
        className={`absolute inset-0 bg-black ${
          blurred ? "bg-opacity-50 backdrop-blur-lg" : "bg-opacity-0"
        }`}
      ></div>
      {blurred && (
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={() => setBlurred(false)}
            className="text-white font-bold text-3xl"
          >
            Enter
          </button>
        </div>
      )}
      {!blurred && (
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white font-bold text-5xl">
            Welcome to My Portfolio
          </h1>
        </div>
      )}
    </div>
  );
};

export default Homepage;
