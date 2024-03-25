/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        paleBrown: "#FEFFEE",
        colorTitle: "#EF8B08",
        borderColor: "#CC9966",
        borderLineColor: "#870040",
        textColor: "#800040",
        bgColor: "#FFFFFF",
      },
      fontFamily: {
        brush: ["brush", "sans-serif"],
        muliya: ["muliya", "serif"],
      },
    },
  },
  plugins: [],
};
