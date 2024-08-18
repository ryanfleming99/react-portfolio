import React, { useState, useEffect } from "react";

const fontFamilies = [
  "'Roboto', sans-serif",
  "'Merriweather', serif",
  "'Lobster', cursive",
  "'Playfair Display', serif",
  "'Lato', sans-serif",
  "'Montserrat', sans-serif",
  "'Oswald', sans-serif"
];

const WelcomeHeading = () => {
  const [currentFont, setCurrentFont] = useState(fontFamilies[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentFont(prevFont => {
        const currentIndex = fontFamilies.indexOf(prevFont);
        const nextIndex = (currentIndex + 1) % fontFamilies.length;
        return fontFamilies[nextIndex];
      });
    }, 1000); // Change font every 2 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <h1
      className="text-white font-bold text-9xl mb-8"
      style={{ fontFamily: currentFont }}
    >
      Ryan Fleming
    </h1>
  );
};

export default WelcomeHeading;
