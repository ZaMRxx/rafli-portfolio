/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald"],
        pixel: ["Pixelify Sans"],
        montserrat: ["Montserrat"],
        specify: ["Specify"]
      },
    },
  },
  plugins: [],
};
