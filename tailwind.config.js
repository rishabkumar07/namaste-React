/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'search-box': 'rgba(40, 44, 63, .3)',
      },
    },
  },
  plugins: [],
}

