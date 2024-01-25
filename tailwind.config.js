/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,ksx,tsx}', './docs/**/*.md'],
  theme: {
    extend: {
      margin: {
        8: '8px'
      }
    }
  },
  plugins: []
}
