/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        amarillo: "#fcbc34 ",
      },
    },
  },
  plugins: [require("daisyui")],
};
