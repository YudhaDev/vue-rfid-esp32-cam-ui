/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        custom : ['Inter','sans']
      }
    },
  },
  plugins: [],
  purge: [ './src/**/*.html', './src/**/*.vue', './src/**/*.jsx', ],
}

