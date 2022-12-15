/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'SoDoSans': 'thin, thin-italic, light, light-italic, regular, italic, semibold, semibold-italic, bold, bold-italic, black, black-italic'
    }
  },
  plugins: [],
}