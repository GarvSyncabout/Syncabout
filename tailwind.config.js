/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
    // "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        Pontano: ['"Pontano Sans"', ...defaultTheme.fontFamily.sans],
        Rajdhani: ['"Rajdhani"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [require("preline/plugin")],
};
