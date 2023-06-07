/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "1rem",
        lg: "2rem",
        xl: "4rem",
      },
    },
    fontFamily: {
      "sans-serif": ["Poppins", "'Open Sans'", "sans-serif"],
    },
    fontWeight: {
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    extend: {
      colors: {
        "yellow-100": "#fffae5",
        "yellow-300": "#FFF2B2",
        "yellow-500": "#FFE566",
        "yellow-800": "#FFD819",
      }
    }
  },
  plugins: [],
};

