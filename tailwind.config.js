/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "steel-blue": "#4682B4",
      },
    },
    screens: {
      xxsm: { max: "550px" },
      xsm: { max: "650px" },
      mspl: { min: "1280px" },
      //sm: { min: "651px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      //md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      //lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      //xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      //"2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
      //"3xl": "1600px",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
