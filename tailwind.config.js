/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        strong: "3px 3px 6px rgb(179 180 178 / 69%), 0 0 5px rgb(15 3 86 / 22%)"
      },
      keyframes: {
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 }
        }
      },
      animation: {
        fadeOut: "fadeOut 10s ease-in-out forwards"
      },
      colors: {
        semiTransparentGray: "rgb(119 119 119)",
        semiLightTransparentGray: "rgba(119, 119, 119, 0.61)",
        semiLightGray: "rgba(119, 119, 119, 0.6)"
      }
    }
  },
  plugins: [require("tailwindcss-textshadow")]
};
