/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e8304f",
        "background-light": "#f8f6f6",
        "background-dark": "#211114",
        cream: "#fdfaf7",
        blush: "#f3e7e9",
        "soft-taupe": "#974e5a",
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
