/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "425px",
      lg: "768px",
    },
    fontFamily: {
      inter: "Inter",
    },
    colors: {
      danger: "#E25858",
      purple: "#8284FA",
      blue: "#4EA8DE",
      "purple-dark": "#5E60CE",
      "blue-dark": "#1E6F9F",
      "gray-100": "#F2F2F2",
      "gray-200": "#D9D9D9",
      "gray-300": "#808080",
      "gray-400": "#333333",
      "gray-500": "#262626",
      "gray-600": "#1A1A1A",
      "gray-700": "#0D0D0D",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
